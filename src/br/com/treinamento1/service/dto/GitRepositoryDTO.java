package br.com.treinamento1.service.dto;

import java.io.Serializable;

public class GitRepositoryDTO implements Serializable {
	
	private static final long serialVersionUID = -8462258476734521493L;
	
	private Long id;
	private String node_id;
	private String name;
	private String full_name;
	private OwnerDTO owner;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNode_id() {
		return node_id;
	}
	public void setNode_id(String node_id) {
		this.node_id = node_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFull_name() {
		return full_name;
	}
	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}
	public OwnerDTO getOwner() {
		return owner;
	}
	public void setOwner(OwnerDTO owner) {
		this.owner = owner;
	}

}