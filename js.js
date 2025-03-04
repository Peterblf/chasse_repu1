        document.getElementById("valider").addEventListener("click", function() {
            let reponse = document.getElementById("reponse").value.toLowerCase();
            if (reponse === "Saloon" || reponse === "saloon" || reponse === "sale loup nœud") { // Remplace "réponse_attendue" par la bonne réponse
                window.location.href = "qr_code.html";
            } else {
                alert("Mauvaise réponse, essayez encore !");
            }
        });
