package br.univel.pe.service;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.univel.pe.entity.Cliente;

@Path("/clientes")
@Produces(MediaType.APPLICATION_JSON)
public class ClienteService extends GenericService<Cliente, Long> {

	@Override
	public Class getClazz() {
		return Cliente.class;
	}

	@Override
	protected String getPropertyDescricao() {
		return "nome";
	}
	
}
