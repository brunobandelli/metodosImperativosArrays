/*METODOS IMPERATIVOS*/

/*
concat()
Descrição: Retorna um novo array que é uma concatenação de dois ou mais arrays.
Tradução: "concatenar"
*/

/*
SINTAXE:
const novoArray = array1.concat(array2, array3, ..., arrayN);

array1, array2, array3, ..., arrayN são os arrays que você deseja concatenar.
*/


//Exemplo 1: Concatenando arrays comuns

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const novoArray = array1.concat(array2, array3);

console.log(novoArray); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Concatenando arrays com elementos individuais

const arrayI1 = ['a', 'b'];
const item1 = 'c';
const item2 = 'd';

const novoArray2 = arrayI1.concat(item1, item2);

console.log(novoArray2); // Saída: ['a', 'b', 'c', 'd']


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Concatenando um array vazio

const arrayV1 = ['a', 'b'];
const arrayV2 = [];

const novoArrayV = arrayV1.concat(arrayV2);

console.log(novoArrayV); // Saída: ['a', 'b']


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Concatenando arrays multidimensionais

const arrayM1 = [[1, 2], [3, 4]];
const arrayM2 = [[5, 6]];

const novoArrayM = arrayM1.concat(arrayM2);

console.log(novoArrayM); // Saída: [[1, 2], [3, 4], [5, 6]]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5: Concatenando arrays de objetos

const arrayO1 = [{ id: 1 }, { id: 2 }];
const arrayO2 = [{ id: 3 }, { id: 4 }];

const novoArrayO = arrayO1.concat(arrayO2);

console.log(novoArrayO);
// Saída: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Concatenando arrays de tipos diferentes

const arrayD1 = ['a', 'b'];
const arrayD2 = [1, 2, 3];
const arrayD3 = [{ id: 1 }, { id: 2 }];

const novoArrayD = arrayD1.concat(arrayD2, arrayD3);

console.log(novoArrayD);
// Saída: ['a', 'b', 1, 2, 3, { id: 1 }, { id: 2 }]



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")

//Exemplo 7: Concatenando arrays usando spread operator (...)

const arrays1 = [1, 2, 3];
const arrays2 = [4, 5, 6];
const arrays3 = [7, 8, 9];

const novoArrays = [...arrays1, ...array2, ...array3];

console.log(novoArray); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 7")

//Exemplo 8: Concatenando uma string com um array de strings usando spread operator

const arrayS = ['a', 'b', 'c'];
const string = 'd';

const novoArrayS = [...arrayS, string];

console.log(novoArrayS); // Saída: ['a', 'b', 'c', 'd']




/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 8")