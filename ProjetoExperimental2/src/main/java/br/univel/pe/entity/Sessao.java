package br.univel.pe.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Sessao implements Serializable, IEntidade<Long> {

	private static final long serialVersionUID = 1925003216718679929L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSessao;
	private String token;
	private long timestamp;

	@ManyToOne(fetch = FetchType.EAGER)
	private Usuario usuario;

	public Long getIdSessao() {
		return idSessao;
	}

	public void setIdSessao(Long idSessao) {
		this.idSessao = idSessao;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario cliente) {
		this.usuario = cliente;
	}

	@Override
	public Long getId() {
		return idSessao;
	}

	@Override
	public void setId(Long id) {
		this.idSessao = id;

	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

}
