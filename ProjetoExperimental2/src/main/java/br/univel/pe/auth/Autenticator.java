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

	/* Simula uma tabela do banco com os usuarios */
//	private final Map<String, String> users = new HashMap();

	/* Simula uma tabela do banco com as chaves de acesso */
	// private final Map<String, String> keys = new HashMap();

	/* Guarda os tokens gerados em tempo de execução */

	private static Autenticator autenticator = null;

	// public static final String KEY = "key";
	public static final String TOKEN = "token";

	private Autenticator() {
		/**
		 * Guarda o usuário e senha dos clientes da API
		 */
//		users.put("walter", "white");
//		users.put("toni", "soprano");

		/**
		 * keys são geradas antecipadamente e disponibilizadas para os clientes da API
		 * Aqui estamos representando as keys para os dois users pré cadastrados.
		 */
		// keys.put("ece40d50-b22b-4b33-a728-343be730d85e", "walter");
		// keys.put("1ee68990-2d56-44a9-ae40-09d0bf074d8d", "toni");
	}

	public static Autenticator getInstance() {
		if (Objects.isNull(autenticator)) {
			autenticator = new Autenticator();
		}
		return autenticator;
	}

	public String login(String user, String password) throws LoginException, NoSuchAlgorithmException {

		// if (keys.containsKey(key)) {
		// String userStorage = keys.get(key);
		Usuario usuario = new UsuarioRepository().buscaPorEmail(user);
		if (usuario != null) {
			String passwordStorage = usuario.getSenha();
			if (passwordStorage.equals(sha1(password))) {
				String auth = UUID.randomUUID().toString();
				Sessao sessao = new Sessao();
				sessao.setToken(auth);
				sessao.setTimestamp(System.currentTimeMillis() + 1000*60*30);
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


	public void logout( String token) throws Exception {
		// if (isKeyValid(key)) {
		// String userKey = keys.get(key);
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