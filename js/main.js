"use strict";

const knopNieuw = document.getElementById("nieuw");

knopNieuw.addEventListener("click", () => {
    const kleurplaat = new Kleurplaat(10, 10);
    kleurplaat.createKleurplaat();
    kleurplaat.kiesKleur();
});

