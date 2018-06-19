package br.univel.pe.repository;

import java.io.Serializable;
import java.security.NoSuchAlgorithmException;

import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import br.univel.pe.auth.Autenticator;
import br.univel.pe.entity.Usuario;

public class UsuarioRepository extends GenericRepository<Usuario, Long> implements Serializable {

	public UsuarioRepository() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Class<Usuario> getClazz() {
		return Usuario.class;
	}
	@Override
	public void saveOrUpdate(Usuario entity) {
		try {
			entity.setSenha(Autenticator.sha1(entity.getSenha()));
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		super.saveOrUpdate(entity);
	}

	public Usuario buscaPorEmail(Usuario usuario) {
		Session s = getSession();
		try {
			return (Usuario) createCriteria(s).add(Restrictions.eq("email", usuario.getEmail())).uniqueResult();
		} finally {
			closeSession(s);
		}

	}
	public Usuario buscaPorEmail(String email) {
		Session s = getSession();
		try {
			return (Usuario) createCriteria(s).add(Restrictions.eq("email", email)).uniqueResult();
		} finally {
			closeSession(s);
		}

	}
	

}
