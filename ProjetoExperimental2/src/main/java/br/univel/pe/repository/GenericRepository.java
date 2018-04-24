package br.univel.pe.repository;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import br.univel.pe.entity.IEntidade;
import br.univel.pe.util.HibernateUtil;

public abstract class GenericRepository<T extends IEntidade<S>, S extends Serializable> {

	public Session getSession() {
		return HibernateUtil.getSession();
	}

	public abstract Class<T> getClazz();

	public GenericRepository() {
		// TODO Auto-generated constructor stub
	}

	public Criteria createCriteria(Session s) {
		return s.createCriteria(getClazz());
	}

	@SuppressWarnings("unchecked")
	public List<T> list() {
		Session s = getSession();
		try {
			return createCriteria(s).list();
		} finally {
			closeSession(s);
		}
	}

	public void closeSession(Session s) {

		if (s != null && (s.isConnected() || s.isOpen())) {
			s.flush();
			s.close();
		}

	}

	@SuppressWarnings("unchecked")
	public S save(T entity) {
		Session s = getSession();
		try {
			return (S) s.save(entity);
		} finally {
			closeSession(s);
		}
	}

	@SuppressWarnings("unchecked")
	public void saveOrUpdate(T entity) {
		Session s = getSession();
		try {
			s.getTransaction().begin();
			s.saveOrUpdate(entity);
			s.getTransaction().commit();
		} finally {
			closeSession(s);
		}
	}

	public List<T> findAll(Order order, String... propertiesOrder) {
		Session session = getSession();
		try {
			Criteria criteria = session.createCriteria(getClazz());

			for (String propertyOrder : propertiesOrder) {
				if (order.isAscending()) {
					criteria.addOrder(org.hibernate.criterion.Order.asc(propertyOrder));
				} else {
					criteria.addOrder(org.hibernate.criterion.Order.desc(propertyOrder));
				}
			}
			return criteria.list();
		} finally {
			closeSession(session);
		}
	}

	@SuppressWarnings("unchecked")
	public T merge(T entity) {
		Session session = getSession();
		try {
			return (T) session.merge(entity);
		} finally {
			closeSession(session);
		}
	}

	public void delete(S id) throws Exception {
		Session session = getSession();
		T entity = (T) session.get(getClazz(), id);
		try {
			if (entity != null) {
				session.getTransaction().begin();
				session.delete(entity);
				session.getTransaction().commit();
			} else {
				throw new Exception("Entidade não existe");
			}
		} finally {
			closeSession(session);
		}
	}

	@SuppressWarnings("unchecked")
	public T find(S id) {
		Session session = getSession();
		try {
			return (T) session.get(getClazz(), id);
		} finally {
			closeSession(session);
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> findByProperty(String propertyName, Object value) {
		Session s = getSession();
		try {
			return createCriteria(s).add(Restrictions.eq(propertyName, value)).list();
		} finally {
			closeSession(s);
			;
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> findByPropertyContainsIgnoreCase(String propertyName, String value) {
		Session s = getSession();
		try {
			return createCriteria(s).add(Restrictions.ilike(propertyName, value, MatchMode.ANYWHERE)).list();
		} finally {
			closeSession(s);
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> findByProperty(String propertyName, String value, MatchMode matchMode) {
		Session s = getSession();
		try {
			if (matchMode != null) {
				return createCriteria(s).add(Restrictions.ilike(propertyName, value, matchMode)).list();
			} else {
				return createCriteria(s).add(Restrictions.ilike(propertyName, value, MatchMode.EXACT)).list();
			}
		} finally {
			closeSession(s);
		}
	}

}
