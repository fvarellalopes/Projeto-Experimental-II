package br.univel.pe.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.jaxrs.annotation.JacksonFeatures;
import com.google.gson.JsonObject;

import br.univel.pe.entity.IEntidade;
import br.univel.pe.repository.GenericRepository;

@Produces(MediaType.APPLICATION_JSON)
public abstract class GenericService<T extends IEntidade<S>, S extends Serializable> {

	public abstract Class getClazz();

	protected String getPropertyDescricao() {
		return "descricao";
	}

	@GET
	@Path("/{id}")
	public Response getById(@PathParam("id") S id) {
		T entidade = (T) getRepository().find(id);
		return Response.ok().entity(entidade).build();
	}

	@GET
	@Path("/search/{query}")
	public Response search(@PathParam("query") String query) {
		GenericRepository repository = getRepository();
		Session s = repository.getSession();
		try {
			Criteria crit = repository.createCriteria(s);
			crit.setMaxResults(10);

			crit.add(Restrictions.ilike(getPropertyDescricao(), query, MatchMode.START));

			return Response.ok().entity(crit.list()).build();
		} finally {
			repository.closeSession(s);
		}
	}

	@POST
	@Path("/search")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response search(Map<String, String> data) {
		GenericRepository repository = getRepository();
		Session s = repository.getSession();
		try {
		Criteria crit = repository.createCriteria(s);
		if (data.containsKey("maxResults")) {
			crit.setMaxResults(Integer.parseInt(data.get("maxResults")));
		}
		if (data.containsKey("query")) {
			crit.add(Restrictions.ilike(getPropertyDescricao(), data.get("query"), MatchMode.START));
		}

		return Response.ok().entity(crit.list()).build();
		}finally {
			repository.closeSession(s);
		}
	}

	@GET
	@JacksonFeatures(serializationEnable =  { SerializationFeature.INDENT_OUTPUT })
	public Response list() {
		List<T> tList = getRepository().list();
		return Response.ok().entity(tList).build();

	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response save(T t) {
		getRepository().saveOrUpdate(t);
		return Response.ok().entity(t).build();
	}
	@DELETE
	@Path("/{id}")
	public Response deleteById(@PathParam("id") S id) {
		try {
			getRepository().delete(id);
		} catch (Exception e) {
			return Response.serverError().entity(e.getMessage()).build();
		}
		return Response.ok().entity(id).build();
	}
	
	
	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(T t) {
		try {
			getRepository().delete(t.getId());
		} catch (Exception e) {
			return Response.serverError().entity(e.getMessage()).build();
		}
		return Response.ok().entity(t.getId()).build();
	}

	protected GenericRepository getRepository() {
		return new GenericRepository<T, S>() {

			@Override
			public Class<T> getClazz() {
				return GenericService.this.getClazz();
			}
		};
	}

}
