// Il click sul pulsante determina l'inizio del programma:
function clickTicket() {

    // Richiesta dati: Variabile Nome (yourname)
    let yourname = prompt("Inserisci il tuo nome:");

    // Verifica la validità dei dati nella Variabile Nome (yourname)
    if (yourname == null || yourname == "" || yourname.length < 2) {

        // In caso la variabile Nome (yourname) contenga dati mancanti, nulli o non validi:
        alert("Sembra che il nome inserito non sia valido. Riprova, il tuo viaggio ti attende!");
        console.log("L'utente NON ha inserito un nome valido.");
        document.getElementById('guideText').style.display = 'block' 

    } else {

        // In caso la variabile Nome (yourname) contenga dati corretti, l'utente può procedere:
        document.getElementById("title").innerHTML = `Benvenuto su ExpressTrain ${yourname}!`;
        console.log(`L'utente dichiara il nome: ${yourname}`);
        console.log("L'utente ha inserito un nome valido.");

        // Richiesta dati: Variabile Età del Passeggero (age)
        let age = Number(prompt("Inserisci la tua età (numero di anni):"));

        // Verifica la validità dei dati nella Variabile Età del Passeggero (age)
        if (age == null || age == "" || isNaN(age) == true) {

            // In caso la variabile Età del Passeggero (age) contenga dati mancanti, nulli o non validi:
            alert("Il valore inserito non è valido. Esprimi la tua età in anni, inserendo solo numeri, per esempio: 25. Riprova cliccando nuovamente il pulsante Prenota. Il tuo viaggio ti attende!");
            console.log("L'utente NON ha inserito un valore valido per l'età'.");
            document.getElementById('guideText').style.display = 'block' 

        } else {

            // In caso la variabile Età del Passeggero (age) contenga dati corretti, l'utente può procedere:
            console.log(`L'utente dichiara l'età in anni, pari a: ${age}`);
            console.log("L'utente ha inserito un valore valido per l'età.");

            // Richiesta dati: Variabile Chilometri (kilometres)
            let kilometres = Number(prompt("Inserisci la distanza che desideri percorrere in chilometri:"));

            // Verifica la validità dei dati nella Variabile Chilometri (kilometres)
            if (kilometres == null || kilometres == "" || kilometres < 1 || isNaN(kilometres) == true) {

                // In caso la variabile Chilometri (kilometres) contenga dati mancanti, nulli o non validi:
                alert("Il valore inserito non è valido. Esprimi la distanza in chilometri (km) inserendo solo numeri, per esempio: 76. Riprova cliccando nuovamente il pulsante Prenota. Il tuo viaggio ti attende!");
                console.log("L'utente NON ha inserito un valore valido per la distanza in km.");
                document.getElementById('guideText').style.display = 'block' 

            } else {

                // In caso la variabile Chilometri (kilometres) contenga dati corretti, l'utente può procedere:
                console.log(`L'utente dichiara il numero di km che desidera percorrere: ${kilometres}`);
                console.log("L'utente ha inserito un valore valido per la distanza in km.");

                // Dichiarazione Informazioni di viaggio
                document.getElementById("ticketName").innerText = `${yourname}`;
                document.getElementById("ticketAge").innerText = `${age}`;
                document.getElementById("ticketKm").innerText = `${kilometres}`;
                document.getElementById("finalText").innerText = "ExpressTrain ti augura buon viaggio";
                document.getElementById("ticketDetails").innerText = "I dettagli del tuo viaggio:";
                document.getElementById('ticketInfo').style.display = 'block' 
                document.getElementById('guideText').style.display = 'block'
                document.getElementById('guideText').style.display = 'none'

                // Biglietto: Calcolo Prezzo Base
                let ticketPrice = 0.21 * kilometres;
                console.log(`Prezzo Biglietto Base: €${ticketPrice}`);

                // Biglietto: Calcolo Prezzo Condizionale
                if (age < 18) {

                    // Biglietto: Calcolo Prezzo Definitivo con sconto 20% minorenni
                    let priceDecrease = (ticketPrice / 100) * 20;
                    console.log(`Sconto Teen da applicare perché Passeggero Minorenne: ${priceDecrease}`);
                    let ticketPriceDef = ticketPrice - priceDecrease;

                    // Dichiarazione del Prezzo del biglietto
                    console.log(`Prezzo del biglietto per il passeggero ${yourname} di ${age} anni che desidera percorrere ${kilometres} km: €${ticketPriceDef.toFixed(2)}`);
                    document.getElementById("ticketPrice").innerHTML = `€${ticketPriceDef.toFixed(2)}`;

                } else if (age >= 65) {

                    // Biglietto: Calcolo Prezzo Definitivo con sconto 40% dedicato agli over 65 anni
                    let priceDecrease = (ticketPrice / 100) * 40;
                    console.log(`Sconto Old da applicare perché Passeggero over 65: ${priceDecrease}`);
                    let ticketPriceDef = ticketPrice - priceDecrease;

                    // Dichiarazione del Prezzo del biglietto
                    console.log(`Prezzo del biglietto per il passeggero ${yourname} di ${age} anni che desidera percorrere ${kilometres} km: €${ticketPriceDef.toFixed(2)}`);
                    document.getElementById("ticketPrice").innerHTML = `€${ticketPriceDef.toFixed(2)}`;

                } else {

                    // Biglietto: Calcolo Prezzo Definitivo senza sconti
                    let ticketPriceDef = ticketPrice;

                    // Dichiarazione del Prezzo del biglietto
                    console.log(`Prezzo del biglietto per il passeggero ${yourname} di ${age} anni che desidera percorrere ${kilometres} km: €${ticketPriceDef.toFixed(2)}`);
                    document.getElementById("ticketPrice").innerHTML = `€${ticketPriceDef.toFixed(2)}`;
                }
            }
        }
    }
}