/*METODOS IMPERATIVOS*/

/*
splice()
Descrição: Modifica um array, adicionando ou removendo elementos.
Tradução: "emendar"
*/

/*
SINTAXE:

array.splice(inicio, quantidade[, elemento1[, elemento2[, ...]]]);

inicio: Índice onde a modificação começa.
quantidade: Número de elementos a serem removidos.
elemento1, elemento2, ...: Elementos a serem adicionados ao array.
*/


//Exemplo 1: Removendo elementos de um array

const array1 = [1, 2, 3, 4, 5];
const elementosRemovidos = array1.splice(2, 2); // Remove 2 elementos a partir do índice 2

console.log('Array após splice:', array1); // Output: [1, 2, 5]
console.log('Elementos removidos:', elementosRemovidos); // Output: [3, 4]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Substituindo elementos em um array

const array2 = ['a', 'b', 'c', 'd'];
array2.splice(2, 1, 'x', 'y'); // Remove 1 elemento a partir do índice 2 e adiciona 'x' e 'y'

console.log('Array após splice:', array2); // Output: ['a', 'b', 'x', 'y', 'd']


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Adicionando elementos a um array

const array3 = ['apple', 'banana', 'cherry'];
array3.splice(2, 0, 'orange', 'lemon'); // Não remove elementos, apenas adiciona 'orange' e 'lemon' a partir do índice 2

console.log('Array após splice:', array3); // Output: ['apple', 'banana', 'orange', 'lemon', 'cherry']


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Removendo todos os elementos de um array

const array5 = [1, 2, 3, 4, 5];
const elementosRemovidosAll = array5.splice(0); // Remove todos os elementos

console.log('Array após splice:', array5); // Output: []
console.log('Elementos removidos:', elementosRemovidosAll); // Output: [1, 2, 3, 4, 5]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5: Substituindo um objeto.

const arrayDeObjetos2 = [
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' },
    { id: 3, nome: 'Cleiton' }
  ];
  
  const novoObjeto = { id: 4, nome: 'Charlie' };
  
  // Adicionar o novo objeto ao array
  arrayDeObjetos2.splice(1, 1, novoObjeto);
  
  console.log('Array após splice:', arrayDeObjetos2);
  


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Adicionando 2 objetos

const arrayDeObjetos3 = [
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' },
    { id: 3, nome: 'Cleiton' }
  ];
  
  const novoObjeto2 = [{ id: 4, nome: 'Charlie' }, { id: 5, nome: 'Bruno' }];
  
  // Adicionar o novo objeto ao array
  arrayDeObjetos3.splice(3, 0, ...novoObjeto2);
  
  console.log('Array após splice:', arrayDeObjetos3);


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")