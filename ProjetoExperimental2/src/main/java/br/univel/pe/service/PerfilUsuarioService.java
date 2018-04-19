package br.univel.pe.service;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.univel.pe.entity.AtualizacaoChamado;
import br.univel.pe.entity.Cliente;
import br.univel.pe.entity.PerfilUsuario;

@Path("/perfis")
@Produces(MediaType.APPLICATION_JSON)
public class PerfilUsuarioService extends GenericService<PerfilUsuario, Long> {

	@Override
	public Class getClazz() {
		return PerfilUsuario.class;
	}

}
