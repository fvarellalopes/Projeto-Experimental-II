package br.univel.pe.service;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.univel.pe.entity.Usuario;
import br.univel.pe.repository.UsuarioRepository;

@Path("/usuarios")
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioService extends GenericService<Usuario, Long> {

//	@GET
//	@Path("/{id}")
//	public Response getByEmail(@PathParam("id") Long id) {
//		Usuario usuario = new UsuarioRepository().find(id);
//		return Response.ok().entity(usuario).build();
//		
//	}
//	@GET
//	public Response list() {
//		List<Usuario> usuario = new UsuarioRepository().findAll();
//		return Response.ok().entity(usuario).build();
//		
//	}
//	@POST
//	@Consumes(MediaType.APPLICATION_JSON)
//	public Response save(Usuario usuario) {
//		 new UsuarioRepository().saveOrUpdate(usuario);
//		return Response.ok().entity(usuario).build();
//	}
//	@DELETE
//	@Consumes(MediaType.APPLICATION_JSON)
//	public Response deleteUsuario(Usuario usuario) {
//		 try {
//			new UsuarioRepository().delete(usuario.getId());
//		} catch (Exception e) {
//			return Response.serverError().entity(e.getMessage()).build();
//		}
//		return Response.ok().entity(usuario.getId()).build();
//	}
	@Override
	public Class getClazz() {
		return Usuario.class;
	}
	
}
