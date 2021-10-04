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
    static kiesKleur() {
        for (const knop of document.getElementsByTagName("button")) {
            knop.addEventListener("click", () => {
                console.log(this.id);
                // switch ()
            });
        }
    }
    kleurKleurplaat(kleur) {
        td.style.backgroundColor = this.#kleur;
    }
}