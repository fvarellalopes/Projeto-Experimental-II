package br.univel.pe.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.univel.pe.entity.Usuario;
import br.univel.pe.repository.UsuarioRepository;

@Path("/usuarios")
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioService {

	@GET
	@Path("/{id}")
	public Response getByEmail(@PathParam("id") Long id) {
		Usuario usuario = new UsuarioRepository().find(id);
		return Response.ok().entity(usuario).build();
		
	}
}
