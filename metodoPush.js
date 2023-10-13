/*METODOS IMPERATIVOS*/

/*
push()
Descrição: Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
Tradução: "empurrar"
*/

//Exemplo 1: Com numeros
let arrN = [1, 2, 3];
arrN.push(4, 5);
console.log(arrN); // Saída: [1, 2, 3, 4, 5]
/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Com strings
const arrS = ['apple'];
arrS.push('banana', 'cherry');
console.log(arrS); // Output: ['apple', 'banana', 'cherry']
/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Com Objeto
const arrO = [{ name: 'Alice' }];
const newObj = { name: 'Bob' };
arrO.push(newObj);
console.log(arrO); // Output: [{ name: 'Alice' }, { name: 'Bob' }]
/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Com Array de Objetos
const arrOA = [{ name: 'Alice' }];
const newObjs = [{ name: 'Bob' }, { name: 'Charlie' }];
arrOA.push(...newObjs);
console.log(arrOA); // Output: [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5: Adicionar propriedades a um objeto dentro de um array:
const arr = [{ name: 'Alice' }];
arr.push({ name: 'Bob' });
arr[0].age = 30;
console.log(arr); // Output: [{ name: 'Alice', age: 30 }, { name: 'Bob' }]
/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Adicionar um objeto dentro de um array em um loop:
const arrOAL = [];
for (let i = 0; i < 3; i++) {
    arrOAL.push({ index: i });
}
console.log(arrOAL); // Output: [{ index: 0 }, { index: 1 }, { index: 2 }]

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")