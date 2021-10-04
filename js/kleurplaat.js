"use strict";


class Kleurplaat {
    #hoogte;
    #breedte;
    constructor(hoogte, breedte) {
        this.#hoogte = hoogte;
        this.#breedte = breedte;
    }

    createKleurplaat() {
        const tbody = document.querySelector("tbody");
        for (let rij = 0; rij < this.#hoogte; rij ++) {
            const tr = tbody.insertRow();
            for (let kolom = 0; kolom < this.#breedte; kolom ++) {
                tr.insertCell();
            }
        }
    }
    
    kiesKleur() {
        const buttons = document.getElementById("buttons");
        for (const knop of buttons.getElementsByTagName("button")) {
            knop.addEventListener("click", function() {
                console.log(this.id);
                switch (this.id) {
                    case "rood" :
                        this.addKleur();
                    }
                });
            }
        }
        
    addKleur(kleur) {
        td.style.backgroundColor = kleur;
    }
}