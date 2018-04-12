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

	@Override
	public Class getClazz() {
		return Usuario.class;
	}
	
}
