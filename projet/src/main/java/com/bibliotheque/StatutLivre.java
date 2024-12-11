package com.bibliotheque;

public enum StatutLivre {
	DISPONIBLE(0),
    EMPRUNTE(1),
    RESERVE(2),
    EN_REPARATION(3),
    PERDU(4),
    ARCHIVE(5);
	 private final int code;
	    StatutLivre(int code) {
	        this.code = code;
	    }
}
