/*METODOS IMPERATIVOS*/

/*
sort()
Descrição: Ordena os elementos de um array no lugar (modifica o array original) e retorna o array ordenado.
Tradução: "ordenar"

Ele classifica os elementos em ordem lexicográfica (quando chamado sem argumentos) 
ou em uma ordem específica, definida pelos argumentos de função.

SINTAXE:

array.sort()
SENDO:
Ordem lexicografica padrão.

OU

array.sort((a,b)=>a - b)
SENDO:
Ao subtrair b de a na função de comparação (a, b) => a - b, 
estamos especificando que os elementos devem ser ordenados em ordem crescente.

OU

array.sort((a, b) => a.localeCompare(b));
SENDO:
b.localeCompare(a) para ordenar as palavras em ordem alfabética reversa (ordem lexicográfica). 
A função localeCompare compara as strings e retorna um valor de acordo com a ordem alfabética.

Ao usar localeCompare, a ordem lexicográfica é determinada com base nas configurações regionais. 
Isso é particularmente útil em aplicativos que são usados internacionalmente e 
precisam suportar diferentes idiomas e culturas.

Para ignorar o case sensitive, bastar por o { sensitivity: 'base' }  como terceiro argumento,
por exemplo: a.localeCompare(b, { sensitivity: 'base' })
*/


//Exemplo 1: Ordenação simples em ordem padrão lexicográfica

const fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Sem função de comparação, com ordem padrão lexigrafica.

/*
Quando você chama array.sort() sem passar uma função de comparação, 
o JavaScript converte os elementos do array para strings e os compara lexicograficamente. 
Se os elementos forem números, isso resultará em uma ordenação numérica crescente.

Repare abaixo no resultado lexicografico.
*/

const numbers = [10, 5, 8, 1, 7];
numbers.sort();
console.log(numbers); // Output: [1, 10, 5, 7, 8]

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Com função de comparação, com ordem numérica crescente

/*
É sempre recomendável fornecer uma função de comparação personalizada para garantir o comportamento desejado, 
especialmente quando lidamos com tipos de dados mais complexos ou quando queremos uma ordenação específica.

Repare agora na diferença com uma função de comparação:
*/

const numbersComp = [10, 5, 8, 1, 7];
numbersComp.sort((a,b)=>a-b);
console.log(numbersComp); // Output: [1, 5, 7, 8, 10]

/*
PARA REVERTER A ORDEM É SÓ MUDAR A ORDEM DE COMPARAÇÃO DOS PARAMETROS:
array.sort((a,b)=>b-a)
*/

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Com função de comparação de ordem lexicográfica determinada com base nas configurações regionais.

const fruitsL = ['banana', 'cherry', 'apple', 'Date'];
fruitsL.sort((a, b) => a.localeCompare(b));
console.log(fruitsL); // Output:[ 'apple', 'banana', 'cherry', 'Date' ]

/*
PARA REVERTER A ORDEM É SÓ MUDAR A ORDEM DE COMPARAÇÃO DOS PARAMETROS:
array.sort((a, b) => b.localeCompare(a))
*/

/*
Usar localeCompare garante que a ordenação leve em conta considerações culturais e linguísticas. 
Por exemplo, em algumas línguas, a ordem alfabética pode não ser a mesma que em inglês, 
e certos caracteres podem ser tratados de forma especial na ordenação.
*/


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")



//Exemplo 5: Ordenação personalizada (ignorando maiúsculas/minúsculas)
/* 
Ordenação Lexica faz com que as palavras de letras maiusculas fiquem nas primeiras posição,
para evitar isso, existem 2 maneniras:
*/

const wordsS = ['banana', 'Apple', 'cherry', 'Date'];
wordsS.sort((a, b) => a.localeCompare(b, { sensitivity: 'base' }));
console.log(wordsS); // Output: ['Apple', 'banana', 'cherry', 'Date']

/*Neste exemplo, a função de comparação personalizada usa localeCompare para ignorar 
maiúsculas/minúsculas durante a ordenação. O terceiro argumento { sensitivity: 'base' } 
garante que a ordenação seja feita sem considerar a sensibilidade a maiúsculas/minúsculas.*/

//OU

const wordsL = ['banana', 'Apple', 'cherry', 'Date'];

// Ignorando maiúsculas e minúsculas
wordsL.sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()));
console.log(wordsL); // Output: [ 'Apple', 'banana', 'cherry', 'Date' ]


/*
Neste exemplo, tanto a quanto b são convertidos para minúsculas (ou maiúsculas) antes de realizar a comparação, 
o que resulta na ordenação ignorando as diferenças de maiúsculas e minúsculas. 
Isso garante que "Apple" venha antes de "banana" na ordenação, 
mesmo que uma esteja em maiúsculas e a outra em minúsculas.
*/



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Exemplo de Ordenação de Strings por Comprimento:

const fruitsT = ['banana', 'apple', 'cherry', 'date'];
fruitsT.sort((a, b) => a.length - b.length);
console.log(fruitsT); // Output: ['date', 'apple', 'cherry', 'banana']


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")

//Exemplo 7: Ordenação de objetos por uma propriedade numerica

const peopleN = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  peopleN.sort((a, b) => a.age - b.age);
  console.log(peopleN);
  /* Output:
  [
    { name: 'Alice', age: 25 },
    { name: 'John', age: 30 },
    { name: 'Bob', age: 35 }
  ]
  */
  


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 7")

//Exemplo 8: Ordenação de objetos por uma propriedade alfabetica

const peopleA = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  // Ordenando por nome em ordem alfabética
  peopleA.sort((a, b) => a.name.localeCompare(b.name));
  console.log(peopleA);
  /* Output:
  [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'John', age: 30 }
  ]
  */
  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 8")

//Exemplo 9: Ordenação por múltiplas propriedades

const products = [
    { name: 'Laptop', price: 1000, brand: 'Dell' },
    { name: 'Tablet', price: 800, brand: 'Apple' },
    { name: 'Laptop', price: 1200, brand: 'Apple' },
    { name: 'Desktop', price: 1200, brand: 'Dell' }
  ];
  
  products.sort((a, b) => {
    if (a.brand !== b.brand) {
      return a.brand.localeCompare(b.brand);
    } else if (a.price !== b.price) {
      return a.price - b.price;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
  
  console.log(products);
  /* Output:
  [
    { name: 'Tablet', price: 800, brand: 'Apple' },
    { name: 'Laptop', price: 1200, brand: 'Apple' },
    { name: 'Desktop', price: 1200, brand: 'Dell' },
    { name: 'Laptop', price: 1000, brand: 'Dell' }
  ]
  */
  



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 9")