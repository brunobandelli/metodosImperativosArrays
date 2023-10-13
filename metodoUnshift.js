/*METODOS IMPERATIVOS*/

/*
unshift()
Descrição: Adiciona um ou mais elementos no início de um array e retorna o novo comprimento do array.
Tradução: "deslocar"
*/

/*
SINTAXE:

arr.unshift(element1, element2, ..., elementN);

element1, element2, ..., elementN: Os elementos que você deseja adicionar no início do array.
*/

//Exemplo 1: Adicionando apenas um elemento

const arr = [1, 2, 3];
arr.unshift(0);  // Adiciona 0 no início do array
console.log(arr);  // Output: [0, 1, 2, 3]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Adicionanod mais do que um elemento.

const arr2 = ['banana', 'apple'];
arr2.unshift('orange', 'grape');  // Adiciona 'orange' e 'grape' no início do array
console.log(arr2);  // Output: ['orange', 'grape', 'banana', 'apple']




/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Adicionando um Objeto no inicio.

const arr3 = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
  ];
  
  const newObj = { name: 'Charlie', age: 35 };
  arr3.unshift(newObj);  // Adiciona newObj no início do array
  console.log(arr3);
  /* Output:
  [
    { name: 'Charlie', age: 35 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
  ]
  */
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Adicionar elementos no início de um array vazio.

const arr4 = [];
arr4.unshift('first', 'second', 'third');
console.log(arr4);  // Output: ['first', 'second', 'third']


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5: Adicionar elementos de tipos diferentes

const arr5 = [1, 2, 3];
arr5.unshift('hello', true, { name: 'John' });
console.log(arr5);
/* Output:
[
  'hello',
  true,
  { name: 'John' },
  1,
  2,
  3
]
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Adicionar elementos de tipos diferentes 2

const arr6 = [1, 2, 3];
const obj = { a: 4, b: 5 };

arr6.unshift('hello', obj, true);
console.log(arr6);
/* Output:
[
  'hello',
  { a: 4, b: 5 },
  true,
  1,
  2,
  3
]
*/



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")
