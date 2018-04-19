package br.univel.pe.service;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.univel.pe.entity.Usuario;

@Path("/usuarios")
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioService extends GenericService<Usuario, Long> {

	@Override
	public Class getClazz() {
		return Usuario.class;
	}
	
	@Override
	protected String getPropertyDescricao() {
		return "nome";
	}
	
	
}
