package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SaleSumDTO implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String sellerName;
	private Double soma;
	public String getSellerName() {
		return sellerName;
	}
	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}
	public Double getSoma() {
		return soma;
	}
	public void setSoma(Double soma) {
		this.soma = soma;
	}
	public SaleSumDTO(Seller seller, Double soma) {
		super();
		this.sellerName = seller.getName();
		this.soma = soma;
	};
	public SaleSumDTO() {}
	
	

}
