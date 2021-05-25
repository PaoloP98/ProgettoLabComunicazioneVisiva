// Selezione tutti i link del secondary menu.
let links = document.querySelectorAll(".btn_sec_menu");


// Passo tutti i link in rassegna tramite un ciclo
for (let i = 0; i < links.length; i++) {
    let link = links[i];
    // let link = links[i];
    // Registro ognuno di essi all'evento click
    link.addEventListener("click", () => {
        // al momento del click devo rimuovere la classe "active" a quello che ce l'ha attualmente ed aggiungerla all'elemento cliccato.

        // seleziono il bottone attualmente "active" tramite il selettore .btn_sec_menu.active 
        let activeLink = document.querySelector(".btn_sec_menu.active");
        // rimuovo la classe active
        activeLink.classList.remove("active");

        // aggiungo la classe active all'elemento appena cliccato
        link.classList.add("active");
    });
}