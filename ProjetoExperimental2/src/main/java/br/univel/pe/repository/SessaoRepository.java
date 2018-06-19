package br.univel.pe.repository;

import java.io.Serializable;
import java.security.NoSuchAlgorithmException;

import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import br.univel.pe.auth.Autenticator;
import br.univel.pe.entity.Sessao;
import br.univel.pe.entity.Usuario;

public class SessaoRepository extends GenericRepository<Sessao, Long> implements Serializable {

	public SessaoRepository() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Class<Sessao> getClazz() {
		return Sessao.class;
	}

	public Sessao buscaPorToken(String token) {
		Session s = getSession();
		try {
			return (Sessao) createCriteria(s).add(Restrictions.eq("token", token)).uniqueResult();
		} finally {
			closeSession(s);
		}

	}
	

}
