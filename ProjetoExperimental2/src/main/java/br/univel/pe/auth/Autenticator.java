package br.univel.pe.auth;
/**
*
* @author joao.rodrigo
*/

import java.security.GeneralSecurityException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

import javax.security.auth.login.LoginException;

import br.univel.pe.entity.Sessao;
import br.univel.pe.entity.Usuario;
import br.univel.pe.repository.SessaoRepository;
import br.univel.pe.repository.UsuarioRepository;

public class Autenticator {

	private static Autenticator autenticator = null;

	public static final String TOKEN = "token";

	private Autenticator() {

	}

	public static Autenticator getInstance() {
		if (Objects.isNull(autenticator)) {
			autenticator = new Autenticator();
		}
		return autenticator;
	}

	public String login(String user, String password) throws LoginException, NoSuchAlgorithmException {
		Usuario usuario = new UsuarioRepository().buscaPorEmail(user);
		if (usuario != null) {
			String passwordStorage = usuario.getSenha();
			if (passwordStorage.equals(sha1(password))) {
				String auth = UUID.randomUUID().toString();
				Sessao sessao = new Sessao();
				sessao.setToken(auth);
				sessao.setTimestamp(System.currentTimeMillis() + 1000 * 60 * 30);
				getRepository().saveOrUpdate(sessao);
				return auth;
			}
		}
		// }
		throw new LoginException("Não autorizado.");
	}

	protected boolean isTokenValid(String token) {
		Sessao sessao = getRepository().buscaPorToken(token);
		return sessao != null && sessao.getTimestamp() > System.currentTimeMillis();
	}

	public void logout(String token) throws Exception {
		if (isTokenValid(token)) {
			getRepository().delete(getRepository().buscaPorToken(token).getId());
			return;
		}

	}

	public static String sha1(String input) throws NoSuchAlgorithmException {
		MessageDigest mDigest = MessageDigest.getInstance("SHA1");
		byte[] result = mDigest.digest(input.getBytes());
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < result.length; i++) {
			sb.append(Integer.toString((result[i] & 0xff) + 0x100, 16).substring(1));
		}

		return sb.toString();
	}

	private SessaoRepository getRepository() {
		return new SessaoRepository();
	}
}