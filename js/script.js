// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
// gli elementi della lista individualmente con un ciclo while.

const listaSpesa = [
    'uova', 
    'zucchero', 
    'pane', 
    'dentifricio',
    'farina'
];

const wrapperElement = document.querySelector ('div.wrapper');



let i = 0;
let listaSpesaItem;
while (i < listaSpesa.length) {
    // const writelistaSpesaItem = document.createElement('p');
    listaSpesaItem = listaSpesa[i];
    console.log(listaSpesaItem);
    // wrapperElement.appendChild(listaSpesaItem);
    i = i + 1;
}