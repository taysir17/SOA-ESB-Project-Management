package com.bibliotheque;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("service")
public class ServiceEtatlivre {
	
	@Autowired
	LivreRepository livreRepository;
	
	@GET
	@Path("/livres/{libelle}")
	@Produces(MediaType.APPLICATION_JSON)
	public boolean isLivreDisponible(@PathParam("libelle") String libelle) {
	    Optional<Livre> livre = livreRepository.findById(libelle);
	    
	    if (livre.isPresent()) {  
	        StatutLivre statut = livre.get().getStatus();
	        
	        if (statut == StatutLivre.DISPONIBLE) {
	            return true;
	        } else {
	            return false;
	        }
	    } else {
	        // Si le livre n'existe pas, retourner false
	        return false;
	    }
	}
}
