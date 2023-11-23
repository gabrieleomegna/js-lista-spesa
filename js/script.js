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
while (i < listaSpesa.length) {
    const writelistaSpesaItem = document.createElement('p');
    let listaSpesaItem = listaSpesa[i];
    writelistaSpesaItem.innerHTML = listaSpesaItem;
    console.log(listaSpesaItem);
    wrapperElement.appendChild(writelistaSpesaItem);
    i = i + 1;
}