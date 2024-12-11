package com.bibliotheque;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface LivreRepository  extends JpaRepository<Livre, String> {
	 Optional<Livre> findByLibelle(String libelle);

}
