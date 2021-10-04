"use strict";

const knopNieuw = document.getElementById("nieuw");
const knopRood = document.getElementById("rood");
const knopGroen = document.getElementById("groen");
const knopBlauw = document.getElementById("blauw");
const knopReset = document.getElementById("wit");

knopNieuw.addEventListener("click", () => {
    const kleurplaat = new Kleurplaat(10, 10);
    kleurplaat.createKleurplaat();
    Kleurplaat.kiesKleur();
});

