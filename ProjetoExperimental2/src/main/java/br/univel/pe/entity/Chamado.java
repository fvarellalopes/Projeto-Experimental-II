package br.univel.pe.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Chamado implements Serializable, IEntidade<Long> {

    private static final long serialVersionUID = 1925003216718679929L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idChamado;
    private String descricao;
    private int prioridade;
    private String titulo;
    private Timestamp data;
    private int situacao;

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Cliente cliente;

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Usuario usuario;

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private TipoChamado tipoChamado;

    @OneToMany(mappedBy = "chamado", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<UsuarioChamado> usuarios = new ArrayList<>();

    @OneToMany(mappedBy = "chamado", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<AtualizacaoChamado> atualizacoes = new ArrayList<>();

    public TipoChamado getTipoChamado() {
        return tipoChamado;
    }

    public void setTipoChamado(TipoChamado tipoChamado) {
        this.tipoChamado = tipoChamado;
    }

    public Long getIdChamado() {
        return idChamado;
    }

    public void setIdChamado(Long idChamado) {
        this.idChamado = idChamado;
    }

    public int getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(int prioridade) {
        this.prioridade = prioridade;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Long getId() {
        return getIdChamado();
    }

    public void setId(Long id) {
        setIdChamado(id);
    }

    public Timestamp getData() {
        return data;
    }

    public void setData(Timestamp data) {
        this.data = data;
    }

    public int getSituacao() {
        return situacao;
    }

    public void setSituacao(int situacao) {
        this.situacao = situacao;
    }

    public List<UsuarioChamado> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(List<UsuarioChamado> usuarios) {
        this.usuarios = usuarios;
    }

    public List<AtualizacaoChamado> getAtualizacoes() {
        return atualizacoes;
    }

    public void setAtualizacoes(List<AtualizacaoChamado> atualizacoes) {
        this.atualizacoes = atualizacoes;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((idChamado == null) ? 0 : idChamado.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Chamado other = (Chamado) obj;
        if (idChamado == null) {
            if (other.idChamado != null)
                return false;
        } else if (!idChamado.equals(other.idChamado))
            return false;
        return true;
    }

}
