package br.univel.pe.entity;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UsuarioChamadoId implements java.io.Serializable {
	@Column(name = "usuario_id")
	private Long usuarioId;

	@Column(name = "chamado_id")
	private Long chamadoId;

	public UsuarioChamadoId() {
		// TODO Auto-generated constructor stub
	}

	public UsuarioChamadoId(Long usuarioId, Long chamadoId) {
		this.usuarioId = usuarioId;
		this.chamadoId = chamadoId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(usuarioId, chamadoId);
	}
	
	

	public Long getUsuarioId() {
		return usuarioId;
	}

	public void setUsuarioId(Long usuarioId) {
		this.usuarioId = usuarioId;
	}

	public Long getChamadoId() {
		return chamadoId;
	}

	public void setChamadoId(Long chamadoId) {
		this.chamadoId = chamadoId;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;

		if (o == null || getClass() != o.getClass())
			return false;

		UsuarioChamadoId that = (UsuarioChamadoId) o;
		return Objects.equals(usuarioId, that.usuarioId) && Objects.equals(chamadoId, that.chamadoId);
	}

}