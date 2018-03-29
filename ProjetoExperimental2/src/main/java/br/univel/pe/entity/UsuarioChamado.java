package br.univel.pe.entity;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.AssociationOverride;
import javax.persistence.AssociationOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "usuariochamado")
public class UsuarioChamado implements Serializable, IEntidade<UsuarioChamadoId> {

	private static final long serialVersionUID = 1925003216718679929L;

	@EmbeddedId
	private UsuarioChamadoId id;

	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("usuarioId")
	private Usuario usuario;

	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("chamadoId")
	private Chamado chamado;

	@Column
	private boolean isResponsavel;

	private UsuarioChamado() {
	}

	public UsuarioChamado(Usuario usuario, Chamado chamado) {
		this.usuario = usuario;
		this.chamado = chamado;
		this.id = new UsuarioChamadoId(usuario.getId(), chamado.getId());
	}

	// @Transient
	// public Usuario getUsuario() {
	// return getPk().getUsuario();
	// }
	//
	// @Transient
	// public Chamado getChamado() {
	// return getPk().getChamado();
	// }

	public boolean isResponsavel() {
		return isResponsavel;
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

	public void setResponsavel(boolean isResponsavel) {
		this.isResponsavel = isResponsavel;
	}

	@Override
	public UsuarioChamadoId getId() {
		return id;
	}

	@Override
	public void setId(UsuarioChamadoId id) {
		this.id = id;

	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;

		if (o == null || getClass() != o.getClass())
			return false;

		UsuarioChamado that = (UsuarioChamado) o;
		return Objects.equals(usuario, that.usuario) && Objects.equals(chamado, that.chamado);
	}

	@Override
	public int hashCode() {
		return Objects.hash(usuario, chamado);
	}
	///

}
