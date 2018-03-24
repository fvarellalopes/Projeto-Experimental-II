package br.univel.pe.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class TipoChamado implements Serializable, IEntidade<Long> {

	private static final long serialVersionUID = 1925003216718679929L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idTipoChamado;
	private String descricao;
	
	

	public Long getIdTipoChamado() {
		return idTipoChamado;
	}

	public void setIdTipoChamado(Long idTipoChamado) {
		this.idTipoChamado = idTipoChamado;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Long getId() {
		return getIdTipoChamado();
	}

	public void setId(Long id) {
		setIdTipoChamado(id);
	}

}
