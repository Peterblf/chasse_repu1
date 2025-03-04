document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("valider").addEventListener("click", function() {
        let reponse = document.getElementById("reponse").value.toLowerCase();
        if (reponse === "x") { // Remplace "réponse_attendue" par la bonne réponse
            document.getElementById("indice").innerHTML = 
                '<p>Bravo ! Voici l'indice pour la prochaine étape :</p>' +
                '<a href="etape2_studenthub.html">Accéder à l'étape 2</a> (Code : 1234)';
        } else {
            alert("Mauvaise réponse, essayez encore !");
        }
    });
});