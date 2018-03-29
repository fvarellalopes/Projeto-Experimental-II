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

	public Criteria createCriteria() {
		return getSession().createCriteria(getClazz());
	}

	@SuppressWarnings("unchecked")
	public List<T> list() {
		return createCriteria().list();
	}

	@SuppressWarnings("unchecked")
	public  S save(T entity) {
		return (S) getSession().save(entity);
	}
	
	@SuppressWarnings("unchecked")
	public  void saveOrUpdate(T entity) {
		Session s = getSession();
		s.getTransaction().begin();
		s.saveOrUpdate(entity);
		s.getTransaction().commit();
	}

	public  List<T> findAll(Order order, String... propertiesOrder) {
		Criteria criteria = getSession().createCriteria(getClazz());

		for (String propertyOrder : propertiesOrder) {
			if (order.isAscending()) {
				criteria.addOrder(org.hibernate.criterion.Order.asc(propertyOrder));
			} else {
				criteria.addOrder(org.hibernate.criterion.Order.desc(propertyOrder));
			}
		}
		return criteria.list();
	}

	@SuppressWarnings("unchecked")
	public  T merge(T entity) {
		return (T) getSession().merge(entity);
	}

	public  void delete(S id) throws Exception {
		T entity = find(id);
		if (entity != null) {
			Session session = getSession();
			session.getTransaction().begin();
			session.delete(entity);
			session.getTransaction().commit();
		} else {
			throw new Exception("Entidade não existe");
		}
	}

	@SuppressWarnings("unchecked")
	public  T find(S id) {
		return (T) getSession().get(getClazz(), id);
	}

	@SuppressWarnings("unchecked")
	public  List<T> findByProperty(String propertyName, Object value) {
		return createCriteria().add(Restrictions.eq(propertyName, value)).list();
	}
	
	@SuppressWarnings("unchecked")
	public  List<T> findByPropertyContainsIgnoreCase(String propertyName, String value) {
		return createCriteria().add(Restrictions.ilike(propertyName, value, MatchMode.ANYWHERE)).list();
	}

	@SuppressWarnings("unchecked")
	public  List<T> findByProperty(String propertyName, String value, MatchMode matchMode) {
		if (matchMode != null) {
			return createCriteria().add(Restrictions.ilike(propertyName, value, matchMode)).list();
		} else {
			return createCriteria().add(Restrictions.ilike(propertyName, value, MatchMode.EXACT)).list();
		}
	}

	@SuppressWarnings("unchecked")
	public  List<T> findAll() {
		return createCriteria().list();
	}

}
