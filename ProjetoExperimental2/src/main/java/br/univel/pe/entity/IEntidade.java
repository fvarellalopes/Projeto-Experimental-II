package br.univel.pe.entity;

import java.io.Serializable;

public interface IEntidade<T extends Serializable> {
	
	public T getId();
	public void setId( T id);

}
