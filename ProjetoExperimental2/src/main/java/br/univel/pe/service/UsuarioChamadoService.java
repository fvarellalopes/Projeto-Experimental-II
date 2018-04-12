package br.univel.pe.service;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.univel.pe.entity.UsuarioChamado;
import br.univel.pe.entity.UsuarioChamadoId;

@Path("/usuariosChamado")
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioChamadoService extends GenericService<UsuarioChamado, UsuarioChamadoId> {

	@Override
	public Class getClazz() {
		return UsuarioChamado.class;
	}
	
}