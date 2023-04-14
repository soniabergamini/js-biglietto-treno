// Il click sul pulsante determina l'inizio del programma:
function clickTicket() {

    console.warn("L'utente ha cliccato il pulsante che avvia il programma di creazione biglietto.");

    // Richiesta dati: Variabile Nome (yourname)
    let yourname = prompt("Inserisci il tuo nome:");

    // Verifica la validità dei dati nella Variabile Nome (yourname)
    if (yourname == null || yourname == "" || yourname.length < 2) {

        // In caso la variabile Nome (yourname) contenga dati mancanti, nulli o non validi:
        alert("Sembra che il nome inserito non sia valido. Riprova, il tuo viaggio ti attende!");
        console.error(`'L'utente NON ha inserito un nome valido. Nome inserito: ${yourname}`);
        document.getElementById('guideText').style.display = 'block' 

    } else {

        // In caso la variabile Nome (yourname) contenga dati corretti, l'utente può procedere:
        document.getElementById("title").innerHTML = `Benvenuto su ExpressTrain ${yourname}!`;
        // console.log(`L'utente dichiara il nome: ${yourname}. Il valore è valido.`);

        // Richiesta dati: Variabile Età del Passeggero (age)
        let age = Number(prompt("Inserisci la tua età (numero di anni):"));

        // Verifica la validità dei dati nella Variabile Età del Passeggero (age)
        if (age == null || age == "" || isNaN(age) == true) {

            // In caso la variabile Età del Passeggero (age) contenga dati mancanti, nulli o non validi:
            alert("Il valore inserito non è valido. Esprimi la tua età in anni, inserendo solo numeri, per esempio: 25. Riprova cliccando nuovamente il pulsante Prenota. Il tuo viaggio ti attende!");
            console.error(`L'utente NON ha inserito un valore valido per l'età. Età inserita: ${age}`);
            document.getElementById('guideText').style.display = 'block' 

        } else {

            // In caso la variabile Età del Passeggero (age) contenga dati corretti, l'utente può procedere:
            // console.log(`L'utente dichiara l'età in anni, pari a: ${age}. Il valore è valido.`);

            // Richiesta dati: Variabile Chilometri (kilometres)
            let kilometres = Number(prompt("Inserisci la distanza che desideri percorrere in chilometri:"));

            // Verifica la validità dei dati nella Variabile Chilometri (kilometres)
            if (kilometres == null || kilometres == "" || kilometres < 1 || isNaN(kilometres) == true) {

                // In caso la variabile Chilometri (kilometres) contenga dati mancanti, nulli o non validi:
                alert("Il valore inserito non è valido. Esprimi la distanza in chilometri (km) inserendo solo numeri, per esempio: 76. Riprova cliccando nuovamente il pulsante Prenota. Il tuo viaggio ti attende!");
                console.error(`L'utente NON ha inserito un valore valido per la distanza in chilometri. KM inseriti: ${kilometres}`);
                document.getElementById('guideText').style.display = 'block' 

            } else {

                // In caso la variabile Chilometri (kilometres) contenga dati corretti, l'utente può procedere:
                // console.log(`L'utente dichiara il numero di km che desidera percorrere: ${kilometres}. Il valore è valido.`);

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
                let ticketPriceDef;

                // Biglietto: Calcolo Prezzo Condizionale
                if (age < 18) {

                    // Biglietto: Calcolo Prezzo Definitivo con sconto 20% minorenni
                    let priceDecrease = (ticketPrice / 100) * 20;
                    // console.log(`Sconto Teen da applicare perché Passeggero Minorenne: ${priceDecrease}`);
                    ticketPriceDef = ticketPrice - priceDecrease;

                } else if (age >= 65) {

                    // Biglietto: Calcolo Prezzo Definitivo con sconto 40% dedicato agli over 65 anni
                    let priceDecrease = (ticketPrice / 100) * 40;
                    // console.log(`Sconto Old da applicare perché Passeggero over 65: ${priceDecrease}`);
                    ticketPriceDef = ticketPrice - priceDecrease;

                } else {

                    // Biglietto: Calcolo Prezzo Definitivo senza sconti
                    ticketPriceDef = ticketPrice;
                }

                // Dichiarazione del Prezzo del biglietto per tutti gli utenti che hanno inserito dati validi
                document.getElementById("ticketPrice").innerHTML = `€${ticketPriceDef.toFixed(2)}`;                

            }
        }
    }
}