// Generare una griglia di gioco quadrata ,
//  in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// recupero dall'html il contenitore che dovrà contenere le mie celle
const gridContainer = document.getElementById("grid-container");

// al contenitore do una width, in base alle cell
gridContainer.style.width = `calc(var(--size-cell) * 10)`;

// faccio un ciclio for per generare i 100 numeri e le 100 celle
for(let i = 1; i <= 100; i++) {

    let numbersVisibili = i;

    // creo un div da js poi aggiungo la classe dove vado a dare lo stile tramite css
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // stampo a schermo i numeri
    cell.append(numbersVisibili);

    // stampo a schermo i quadrati
    gridContainer.append(cell);
    
    // console.log(numeriVisibili);
    // console.log(cell);

    cell.addEventListener("click", function(){
        this.classList.add("clicked");

        console.log(cell);
    });
}
