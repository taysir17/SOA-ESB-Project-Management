package com.bibliotheque;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Livre implements Serializable {
	@Id
	private String libelle;
	private String titre;
	private String auteur;
	private StatutLivre status;
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getAuteur() {
		return auteur;
	}
	public void setAuteur(String auteur) {
		this.auteur = auteur;
	}
	public StatutLivre getStatus() {
		return status;
	}
	public void setStatus(StatutLivre status) {
		this.status = status;
	}
	
	


}
