/*METODOS IMPERATIVOS*/

/*
includes()
Descrição: Verifica se um array contém um determinado elemento e retorna verdadeiro (true) ou falso (false).
Tradução: "contém"
*/


/*
SINTAXE:

array.includes(elemento[, índiceInicial])

elemento: O elemento que você deseja verificar se está presente no array.
índiceInicial (opcional): Um índice a partir do qual a pesquisa deve começar. 
Se não for fornecido, a pesquisa começará a partir do índice 0.
*/



//Exemplo 1: Verificando a existência de um elemento em um array

const frutas = ["maçã", "banana", "laranja", "morango"];
const elemento = "laranja";

const contemLaranja = frutas.includes(elemento);

console.log(contemLaranja); // true



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Verificando a existência de elementos em um array de números inteiros com indice inicial

const numeros = [10, 20, 30, 40, 50];

console.log(numeros.includes(30,3)); // false


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Usando o índiceInicial para iniciar a pesquisa a partir de um índice específico

const numerosI = [1, 2, 3, 4, 5];
const elementoI = 3;
const índiceInicial = 2;

const contemNumero = numerosI.includes(elementoI, índiceInicial);

console.log(contemNumero); // true


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Verificando a existência de um objeto em um array.

const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 35 }
  ];
  
  const pessoaProcurada = { nome: "Maria", idade: 30 };
  
  console.log(pessoas.includes(pessoaProcurada)); // false
  
/*
O metodo Includes() em arrays de objetos não é indicado pois,
O método includes() não encontra o objeto pessoaProcurada no array de pessoas, 
mesmo que contenha as mesmas propriedades e valores. 
Isso ocorre porque includes() compara a referência de objetos, não o conteúdo.
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5: Usando includes() com arrays multidimensionais.

const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(matriz.includes([4, 5, 6])); // true
console.log(matriz.includes([1, 2])); // false


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Verificando a existência de valores em um array de tipos mistos.

const dados = [10, "Alice", true, null];

console.log(dados.includes("Alice")); // true
console.log(dados.includes(false)); // false


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")

