// Richiesta dati: Variabile Nome
let yourname = prompt("Inserisci il tuo nome:");
document.getElementById("title").innerHTML = `Benvenuto su ExpressTrain ${yourname}!`;
console.log(`L'utente dichiara il nome: ${yourname}`);

// Richiesta dati: Variabile Chilometri
let kilometres = Number(prompt("Inserisci la distanza che desideri percorrere in km:"));
console.log(`L'utente dichiara il numero di km che desidera percorrere: ${kilometres}`);

// Richiesta dati: Variabile Età Passeggero
let age = Number(prompt("Inserisci la tua età (numero di anni):"));
console.log(`L'utente dichiara l'età in anni del passeggero, pari a: ${age}`);

// Dichiarazione Informazioni di viaggio
document.getElementById("ticketName").innerText = `${yourname}`;
document.getElementById("ticketAge").innerText = `${age}`;
document.getElementById("ticketKm").innerText = `${kilometres}`;

// Biglietto: Calcolo Prezzo Base
let ticketPrice = 0.21 * kilometres;
console.log(`Prezzo Biglietto Base: €${ticketPrice}`);

// Biglietto: Calcolo Prezzo Condizionale
if (age < 18) {

    // Biglietto: Calcolo Prezzo Definitivo con sconto 20% minorenni
    let priceDecrease = (ticketPrice / 100 ) * 20;
    console.log(`Sconto Teen da applicare perché Passeggero Minorenne: ${priceDecrease}`);
    let ticketPriceDef = ticketPrice - priceDecrease;

    // Dichiarazione del Prezzo del biglietto
    console.log(`Prezzo del biglietto per il passeggero ${yourname} di ${age} anni che desidera percorrere ${kilometres} km: ${ticketPriceDef.toFixed(2)}`);
    document.getElementById("ticketPrice").innerHTML = `Il prezzo del tuo biglietto è pari a: €${ticketPriceDef.toFixed(2)}`;

} else if (age >= 65) {

    // Biglietto: Calcolo Prezzo Definitivo con sconto 40% dedicato agli over 65 anni
    let priceDecrease = (ticketPrice / 100) * 40;
    console.log(`Sconto Old da applicare perché Passeggero over 65: ${priceDecrease}`);
    let ticketPriceDef = ticketPrice - priceDecrease;

    // Dichiarazione del Prezzo del biglietto
    console.log(`Prezzo del biglietto per il passeggero ${yourname} di ${age} anni che desidera percorrere ${kilometres} km: ${ticketPriceDef.toFixed(2)}`);
    document.getElementById("ticketPrice").innerHTML = `Il prezzo del tuo biglietto è pari a: €${ticketPriceDef.toFixed(2)}`;

} else {

    // Biglietto: Calcolo Prezzo Definitivo senza sconti
    let ticketPriceDef = ticketPrice;

    // Dichiarazione del Prezzo del biglietto
    console.log(`Prezzo del biglietto per il passeggero ${yourname} di ${age} anni che desidera percorrere ${kilometres} km: ${ticketPriceDef.toFixed(2)}`);
    document.getElementById("ticketPrice").innerHTML = `Il prezzo del tuo biglietto è pari a: €${ticketPriceDef.toFixed(2)}`;
}