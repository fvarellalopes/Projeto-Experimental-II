package br.univel.pe.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.univel.pe.entity.PerfilUsuario;
import br.univel.pe.entity.TipoChamado;
import br.univel.pe.entity.Usuario;
import br.univel.pe.repository.TipoChamadoRepository;
import br.univel.pe.repository.UsuarioRepository;

@Path("/tiposChamado")
@Produces(MediaType.APPLICATION_JSON)
public class TipoChamadoService extends GenericService<TipoChamado, Long> {

	@Override
	public Class getClazz() {
		return TipoChamado.class;
	}
	
}