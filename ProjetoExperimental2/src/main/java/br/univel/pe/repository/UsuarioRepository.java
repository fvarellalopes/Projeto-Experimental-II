package br.univel.pe.repository;

import java.io.Serializable;

import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import br.univel.pe.entity.Usuario;

public class UsuarioRepository extends GenericRepository<Usuario, Long> implements Serializable {

	public UsuarioRepository() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Class<Usuario> getClazz() {
		return Usuario.class;
	}

	public Usuario buscaPorEmail(Usuario usuario) {
		Session s = getSession();
		try {
			return (Usuario) createCriteria(s).add(Restrictions.eq("login", usuario.getEmail())).uniqueResult();
		} finally {
			closeSession(s);
		}

	}

}
