package br.univel.pe.entity;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
public class AtualizacaoChamado implements Serializable, IEntidade<Long> {

	private static final long serialVersionUID = 1925003216718679929L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAtualizacaoChamado;
	private String descricao;
	private Timestamp data;

	@ManyToOne(optional = false)
	private Usuario usuario;

	@ManyToOne(optional = false)
	private Chamado chamado;

	public Long getIdAtualizacaoChamado() {
		return idAtualizacaoChamado;
	}

	public void setIdAtualizacaoChamado(Long idAtualizacaoChamado) {
		this.idAtualizacaoChamado = idAtualizacaoChamado;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Timestamp getData() {
		return data;
	}

	public void setData(Timestamp data) {
		this.data = data;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Chamado getChamado() {
		return chamado;
	}

	public void setChamado(Chamado chamado) {
		this.chamado = chamado;
	}

	@Override
	public Long getId() {
		return getIdAtualizacaoChamado();
	}

	@Override
	public void setId(Long id) {
		setIdAtualizacaoChamado(id);

	}

}
