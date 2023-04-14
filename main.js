



function validointi(event) {
    event.preventDefault();

    let id = document.getElementById("id").value;
    let sala = document.getElementById("sala").value;
    let posti = document.getElementById("posti").value;
    let nimi = document.getElementById("nim").value;
    let maa = document.getElementById("maaValinta");
    let osoite = document.getElementById("osoit").value;
    let sahko = document.getElementById("sahko").value;
    let suomi = document.getElementById("kieliSuomi");
    let muu = document.getElementById("kieliMuu");




    if (id == "") {
        alert("Käyttäjä ID on pakollinen!")
        return;
    }
    if (id.length < 5) {
        alert("ID:n tulee olla vähintään 6 merkkiä pitkä!")
        return;
    }
    if (sala == "") {
        alert("Salasana on pakollinen!")
        return;
    }
    if (sala.length < 5) {
        alert("Salasanan tulee olla vahvempi!")
        return;
    }
    if (nimi == "") {
        alert("Nimi on pakollinen!")
        return;
    }
    if (osoite == "") {
        alert("Osoite on pakollinen!")
        return;
    }
    if (maa.value === "") {
        alert("Valitse maa!");
        return;
    }
    if (posti == "") {
        alert("Postinumero on pakollinen!")
        return;
    }
    const numero = /^\d+$/;
    if(!numero.test(posti)){
        alert("Vain numerot ovat sallittuja!")
        return;
    }
    if(posti.length < 5 || posti.length > 5){
        alert("Postinumeron tulee olla viisi numeroinen!")
        return;
    }
    if (sahko == "") {
        alert("Sähkoposti on pakollinen!")
        return;
    }
    const testaus = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!testaus.test(sahko)) {
        alert("Syötä oikea sähköpostiosoite!");
        return;
    }
    if (document.getElementById("m").checked) {
    } else if (document.getElementById("n").checked) {
    } else {
        alert("Valitse sukupuoli!")
        return;
    }
    if (suomi.checked == true) {
    } else if (muu.checked == true) {

    } else {
        alert("Valitse kieli!")
        return;
    }
    if (suomi.checked && muu.checked) {
        alert("Valitse vain yksi kieli!");
        return;
      }

    validointiOnnistui()


}



function validointiOnnistui() {
    alert("Kiitos ja tervetuloa!")
    location.reload();
    return;
}