// Richiesta dati: Variabile Nome
let yourname = prompt("Inserisci il tuo nome:");
document.getElementById("title").innerHTML = `Benvenuto su ExpressTrain ${yourname}!`;
console.log(`L'utente dichiara il nome: ${yourname}`);

// Richiesta dati: Variabile Chilometri
let kilometres = Number(prompt("Inserisci la distanza da percorrere in km:"));
console.log(`L'utente dichiara il numero di km che desidera percorrere: ${kilometres}`);

// Richiesta dati: Variabile Età Passeggero
let eta = Number(prompt("Inserisci l'età del passeggero (numero di anni):"));
console.log(`L'utente dichiara l'età in anni del passeggero, pari a: ${eta}`);

