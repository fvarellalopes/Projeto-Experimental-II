package br.univel.pe.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Usuario implements Serializable, IEntidade<Long> {

	private static final long serialVersionUID = 1925003216718679929L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idUsuario;
	private String email;
	private String senha;
	private String nome;
	private String telefone;

	@ManyToOne
	private Cliente cliente;

	@ManyToOne
	private PerfilUsuario perfilUsuario;

	@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<UsuarioChamado> chamados = new ArrayList<>();

	public List<UsuarioChamado> getChamados() {
		return chamados;
	}

	public void setChamados(List<UsuarioChamado> chamados) {
		this.chamados = chamados;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public PerfilUsuario getPerfilUsuario() {
		return perfilUsuario;
	}

	public void setPerfilUsuario(PerfilUsuario perfilUsuario) {
		this.perfilUsuario = perfilUsuario;
	}

	public Usuario() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Long getId() {
		return idUsuario;
	}

	public void setId(Long id) {
		this.idUsuario = id;

	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void addChamado(Chamado chamado) {
		UsuarioChamado UsuarioChamado = new UsuarioChamado(this, chamado);
		chamados.add(UsuarioChamado);
		chamado.getUsuarios().add(UsuarioChamado);
	}

	public void removeChamado(Chamado chamado) {
		for (Iterator<UsuarioChamado> iterator = chamados.iterator(); iterator.hasNext();) {
			UsuarioChamado UsuarioChamado = iterator.next();

			if (UsuarioChamado.getUsuario().equals(this) && UsuarioChamado.getChamado().equals(chamado)) {
				iterator.remove();
				UsuarioChamado.getChamado().getUsuarios().remove(UsuarioChamado);
				UsuarioChamado.setUsuario(null);
				UsuarioChamado.setChamado(null);
			}
		}
	}

}
