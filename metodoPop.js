/*METODOS IMPERATIVOS*/

/*
pop()
Descrição: Remove o último elemento de um array e o retorna .
Tradução: "retirar"
*/

/*
O método pop() em JavaScript remove o último elemento de um array e o retorna,
ao mesmo tempo em que modifica o array original.
*/

//Exemplo 1: Array de strings

const fruits = ['apple', 'banana', 'cherry'];

const lastFruit = fruits.pop(); // Remove 'cherry'
console.log('Removed element:', lastFruit); // Output: 'cherry'

console.log('Updated array:', fruits); // Output: ['apple', 'banana']



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Array de numero

const numbers = [10, 20, 30, 40];

const lastNumber = numbers.pop(); // Remove 40
console.log('Removed element:', lastNumber); // Output: 40

console.log('Updated array:', numbers); // Output: [10, 20, 30]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Array de Objtos

const carArray = [
  { brand: 'Toyota', model: 'Corolla' },
  { brand: 'Ford', model: 'Mustang' },
  { brand: 'Honda', model: 'Civic' }
];

const removedCar = carArray.pop(); // Remove { brand: 'Honda', model: 'Civic' }
console.log('Removed element:', removedCar);

console.log('Updated array:', carArray);


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Usando pop() em um array vazio

const emptyArray = [];

const removedElement = emptyArray.pop(); // Remove undefined (array is already empty)
console.log('Removed element:', removedElement); // Output: undefined

console.log('Updated array:', emptyArray); // Output: []


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")
