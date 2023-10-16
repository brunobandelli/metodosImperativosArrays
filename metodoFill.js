/*METODOS IMPERATIVOS*/

/*
fill()
Descrição: Preenche todos os elementos de um array com um valor estático, do índice inicial ao índice final (não incluído).
Tradução: "preencher"
*/

/*
array.fill(valor, indiceInicial, indiceFinal])

valor: O valor a ser usado para preencher o array.
indiceInicial (opcional): O índice inicial a partir do qual começar a preencher (padrão é 0).
indiceFinal (opcional): O índice final (não inclusivo) até o qual preencher (padrão é array.length).
*/

//Exemplo 1: Preenchendo um array com um valor

const arr = [1, 2, 3, 4, 5];
arr.fill(0); // Preenche o array com zeros
console.log(arr); // Saída: [0, 0, 0, 0, 0]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Preenchendo parte de um array com um valor

const arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 1, 3); // Preenche do índice 1 até o índice 3 (não inclusivo) com zeros
console.log(arr2); // Saída: [1, 0, 0, 4, 5]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Preenchendo com um valor e utilizando índices negativos

const arr3 = [1, 2, 3, 4, 5];
arr3.fill(10, -2); // Preenche a partir do segundo elemento a contar do final com o valor 10
console.log(arr3); // Saída: [1, 2, 3, 10, 10]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Preenchendo do índice 1 até o penúltimo elemento com um valor

const arr4 = [10, 20, 30, 40, 50];
arr4.fill(0, 1, -1); // Preenche do índice 1 até o penúltimo elemento com 0
console.log(arr4); // Saída: [10, 0, 0, 0, 50]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5: Preenchendo parte de um array com um intervalo negativo

const arr5 = [1, 2, 3, 4, 5];
arr5.fill(0, -4, -1); // Preenche do quarto elemento até o penúltimo elemento com 0
console.log(arr5); // Saída: [1, 0, 0, 0, 5]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Preenchendo um array de objetos com objetos independentes

const arr6 = new Array(3).fill().map(() => ({}));

// Modificando uma propriedade de um objeto no array
arr6[1].prop1 = 42;

console.log(arr6);
/* Saída:
[
  {},
  { prop1: 42 },
  {}
]
*/



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")