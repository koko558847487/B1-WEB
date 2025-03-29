function calculerDevis() {
    // Récupérer les valeurs du formulaire
    document.getElementById("afficheNumDevis").textContent = document.getElementById("numDevis").value;
    document.getElementById("afficheDateDevis").textContent = document.getElementById("dateDevis").value;

    document.getElementById("afficheNomEmetteur").textContent = document.getElementById("nomEmetteur").value;
    document.getElementById("afficheContactEmetteur").textContent = document.getElementById("contactEmetteur").value;
    document.getElementById("afficheEmailEmetteur").textContent = document.getElementById("emailEmetteur").value;
    document.getElementById("afficheAdresseEmetteur").textContent = document.getElementById("adresseEmetteur").value;

    document.getElementById("afficheNomClient").textContent = document.getElementById("nomClient").value;
    document.getElementById("afficheContactClient").textContent = document.getElementById("contactClient").value;
    document.getElementById("afficheAdresseClient").textContent = document.getElementById("adresseClient").value;

    // Calculs pour le béton
    let surface = parseFloat(document.getElementById("surface").value);
    let epaisseur = parseFloat(document.getElementById("epaisseur").value) / 100;
    let volume = surface * epaisseur;
    let camions = Math.ceil(volume / 9);
    let prixBeton = volume * 91;
    let prixTransport = camions * 140;
    let prixHT = prixBeton + prixTransport;
    let tva = prixHT * 0.2;
    let prixTTC = prixHT + tva;

    // Affichage des résultats
    document.getElementById("volume").textContent = volume.toFixed(2);
    document.getElementById("totalBeton").textContent = prixBeton.toFixed(2);
    document.getElementById("camions").textContent = camions;
    document.getElementById("totalCamions").textContent = prixTransport.toFixed(2);
    document.getElementById("prixHT").textContent = prixHT.toFixed(2);
    document.getElementById("tva").textContent = tva.toFixed(2);
    document.getElementById("prixTTC").textContent = prixTTC.toFixed(2);

    // Afficher le devis
    document.getElementById("devis").classList.remove("hidden");
}

function imprimerDevis() {
    window.print();
}
