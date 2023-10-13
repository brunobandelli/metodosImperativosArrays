/*METODOS IMPERATIVOS*/

/*
shift()
Descrição: Remove o primeiro elemento de um array e o retorna.
Tradução: "remover primeiro elemento"
*/

//Exemplo 1: com string

let frutas = ['maçã', 'banana', 'laranja'];

// Removendo o primeiro elemento do array e armazenando-o em uma variável
let primeiraFruta = frutas.shift();

console.log('Fruta removida:', primeiraFruta); //OUTPUT: Fruta removida: maçã
console.log('Array após o shift:', frutas);    //OUTPUT: Array após o shift: [ 'banana', 'laranja' ]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: com numero

let numeros = [10, 20, 30];

let primeiroNumero = numeros.shift();

console.log('Número removido:', primeiroNumero); // Número removido: 10
console.log('Array após o shift:', numeros); // Array após o shift: [20, 30]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Com array vazio

let vazio = [];

let elementoRemovido = vazio.shift();

console.log('Elemento removido:', elementoRemovido); // Elemento removido: undefined
console.log('Array após o shift:', vazio); // Array após o shift: []


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")
