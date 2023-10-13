/*METODOS IMPERATIVOS*/


/*
reverse()
Descrição: Inverte a ordem dos elementos em um array no lugar (modifica o array original) e retorna o array invertido.
Tradução: "inverter"
*/

/*
O método reverse() é usado para inverter a ordem dos elementos em um array.
Ele não cria um novo array, mas sim modifica o array original, reorganizando seus elementos em ordem inversa.
*/

//Exemplo 1: Invertendo um array de números

const numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros); // Output: [5, 4, 3, 2, 1]

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Invertendo um array de strings

const nomes = ["Alice", "Bob", "Charlie", "David"];
nomes.reverse();
console.log(nomes); // Output: ["David", "Charlie", "Bob", "Alice"]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Invertendo um array de objetos

const pessoas = [
    { nome: "Maria", idade: 30 },
    { nome: "João", idade: 25 },
    { nome: "Pedro", idade: 40 }
  ];
  
  pessoas.reverse();
  console.log(pessoas);
  /* Output:
  [
    { nome: 'Pedro', idade: 40 },
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 }
  ]
  */
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Cópia invertida do array

/*
Lembre-se de que o método reverse() modifica o array original. 
Se você precisa de uma cópia invertida do array sem modificar o original, 
você pode criar uma cópia primeiro e, em seguida, usar o método reverse() na cópia.
*/

const numerosI = [1, 2, 3, 4, 5];
const numerosInvertidos = [...numerosI].reverse();
console.log(numerosInvertidos); // Output: [5, 4, 3, 2, 1]
console.log(numerosI); // O array original não foi modificado: [1, 2, 3, 4, 5]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

