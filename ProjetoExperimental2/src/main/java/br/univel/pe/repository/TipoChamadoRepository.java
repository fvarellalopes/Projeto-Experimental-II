package br.univel.pe.repository;

import java.io.Serializable;

import br.univel.pe.entity.TipoChamado;

public class TipoChamadoRepository extends GenericRepository<TipoChamado, Long> implements Serializable {

	public TipoChamadoRepository() {
	}

	@Override
	public Class<TipoChamado> getClazz() {
		return TipoChamado.class;
	}


}
