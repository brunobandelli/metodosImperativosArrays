/*METODOS IMPERATIVOS*/


/*
join()
Descrição: Converte todos os elementos de um array em uma string, unindo-os com o separador especificado.
Tradução: "juntar"
*/

/*
SINTAXE:

array.join(separador)

separador (opcional): O separador a ser usado para unir os elementos do array. 
É uma string que será colocada entre os elementos. Se não for fornecido,
a VÍRGULA É usada como PADRÃO.
*/

//Exemplo 1: Em strings, sem especificar o separador.

const fruits = ['apple', 'banana', 'cherry'];
const result = fruits.join(); // O separador padrão (',') é usado
console.log(result); // Saída: "apple,banana,cherry"


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 1")

//Exemplo 2: Em strings, especisifando o separador.

const fruitsC = ['apple', 'banana', 'cherry'];
const resultC = fruitsC.join(' - '); // Usando um separador personalizado
console.log(resultC); // Saída: "apple - banana - cherry"


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 2")

//Exemplo 3: Strings, especificado como espaço.

const sentenceArray = ['The', 'quick', 'brown', 'fox'];
const sentence = sentenceArray.join(' ');
console.log(sentence); // Saída: "The quick brown fox"


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 3")

//Exemplo 4: Com numeros

const numbers = [10, 20, 30];
const resultN = numbers.join(' + ');
console.log(resultN); // Saída: "10 + 20 + 30"


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 4")

//Exemplo 5:  Se a matriz estiver vazia, o método join() retornará uma string vazia

const emptyArray = [];
const resultV = emptyArray.join('-');
console.log(resultV); // Saída: ""


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 5")

//Exemplo 6: Em Objetos

const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];
  
const peopleString = people.join(', ');
  
console.log(peopleString);
// Saída: "[object Object], [object Object], [object Object]"

/*
Neste caso, o método join() chamou implicitamente toString() para cada objeto no array,
produzindo uma representação padrão que não é muito útil. 
Se você deseja obter uma representação personalizada de cada objeto, 
seria necessário mapear os objetos para as representações desejadas antes de usar o join().
*/
  


/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 6")

//Exemplo 7: Em Objetos Mapeados

const peopleM = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  const names = peopleM.map(person => person.name);
  const namesString = names.join(', ');
  
  console.log(namesString); // Saída: "John, Alice, Bob"
  
/*
Neste exemplo, usamos map() para extrair os nomes dos objetos em um novo array (names). 
Em seguida, usamos o join() para unir esses nomes em uma única string separada por vírgulas.
*/



/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 7")

//Exemplo 8: Em Objetos Mapeados

const books = [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson' }
  ];
  
  const bookList = books.map(book => `${book.title} by ${book.author}`).join('\n');
  console.log('Books:\n' + bookList);
  /* Saída:
  Books:
  JavaScript: The Good Parts by Douglas Crockford
  Eloquent JavaScript by Marijn Haverbeke
  You Don't Know JS by Kyle Simpson
  */  

/*------------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------Exemplo 8")

