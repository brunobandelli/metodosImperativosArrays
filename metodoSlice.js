/*METODOS IMPERATIVOS*/

/*
slice()
Descrição: Retorna uma cópia superficial de uma parte de um array em um novo array.
Tradução: "fatia"
*/

/*
Sintaxe:

array.slice(início, fim);

início (opcional): Índice onde o slice começa. Se não for especificado, o slice começa do índice 0.
fim (opcional): Índice onde o slice termina (NÃO INCLUSO). Se não for especificado, o slice vai até o final da matriz.
*/

//Exemplo 1: Especificando os indices de inicio e o fim.

const originalArray1 = [1, 2, 3, 4, 5];

const slice1 = originalArray1.slice(1, 4);
console.log(slice1);  // Output: [2, 3, 4]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Sem especificar o indice de fim.

const originalArray2 = [1, 2, 3, 4, 5];

const slice2 = originalArray2.slice(1);
console.log(slice2);  // Output: [2, 3, 4, 5]


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Sem especificar os indices

const originalArray3 = [1, 2, 3, 4, 5];

const copyArray = originalArray3.slice();
console.log(copyArray);  // Output: [1, 2, 3, 4, 5]

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Com índices NEGATIVOS

const array = [1, 2, 3, 4, 5];

const sliceNegative = array.slice(-3, -1);
console.log(sliceNegative);  // Output: [3, 4]

/*
Passo a passo:
Quando usamos índices negativos, eles contam a partir do final da matriz.
-1 refere-se ao último elemento, -2 ao penúltimo, e assim por diante.

-3 corresponde ao terceiro elemento contando do final, 
que é 3. -1 corresponde ao primeiro elemento contando do final, que é 5.

No contexto do método slice() em JavaScript, os índices negativos começam a contar a partir do final da array,
onde o índice -1 representa o último elemento.

Portando:
array.slice(-3, -1) seleciona os elementos começando do terceiro elemento contando do final (3) 
até o primeiro elemento contando do final, excluindo-o (5), resultando em [3, 4].
*/



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5: Com indices fora do limite

const array2 = ['a', 'b', 'c', 'd', 'e'];

// Índices fora dos limites são ajustados para os limites da matriz
const sliceOutOfBounds = array2.slice(7, 10);
console.log(sliceOutOfBounds);  // Output: []


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Com índice negativo no final da matriz

const array3 = ['a', 'b', 'c', 'd', 'e'];

const sliceToEnd = array3.slice(2, -1);
console.log(sliceToEnd);  // Output: ['c', 'd']

/*
DICA:
Perceba que nessa ocasião, o indice final é negativo,
isso facilita, pois você não precisa contar até o final com o indice positivo, que no caso seria (4).
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")

//Exemplo 7: Em uma matriz de caracteres (string)

const str = 'Hello, World!';

const sliceString = str.slice(0, 5);
console.log(sliceString);  // Output: 'Hello'


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 7")

//Exemplo 8: Em um array de objetos.

const originalArray4 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Emily' }
  ];
  
  const sliceOfArray = originalArray4.slice(1, 3);
  console.log(sliceOfArray);
  // Output: [ { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ]
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("---------------------------------------------------------------------------------------------------Exemplo 8")


//Exemplo 9: Slice para selecionar objetos com base em uma condição

const array4 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Emily' }
  ];
  
  const sliceWithCondition = array4.slice().filter(item => item.id > 2);
  console.log(sliceWithCondition);
  // Output: [ { id: 3, name: 'Charlie' }, { id: 4, name: 'David' }, { id: 5, name: 'Emily' } ]
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 9")

//Exemplo 10: Slice com modificação em objetos na matriz resultante

const array5 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Emily' }
  ];
  
  const modifiedSlice = array5.slice(1, 4).map(item => {
    item.name = item.name.toUpperCase();
    return item;
  });
  
  console.log(modifiedSlice);
  // Output: [ { id: 2, name: 'BOB' }, { id: 3, name: 'CHARLIE' }, { id: 4, name: 'DAVID' } ]
  
/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 10")