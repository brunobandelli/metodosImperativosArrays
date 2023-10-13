````Javascript
Existe uma nomenclatura comumente utilizada para diferenciar os métodos que não precisam de personalização (e, portanto, não requerem uma função de retorno de chamada) dos métodos que precisam (e, portanto, aceitam uma função de retorno de chamada). Essa distinção está relacionada ao conceito de "métodos imperativos" e "métodos de ordem superior" em programação funcional.

Métodos Imperativos (ou Procedurais):
São métodos que executam operações específicas diretamente no objeto (ou array) que estão sendo chamados, sem a necessidade de uma função de retorno de chamada. Exemplos: pop(), push(), splice(), concat(), etc.


Métodos de Ordem Superior (ou Funcionais):
São métodos que aceitam funções de retorno de chamada como argumentos, permitindo personalizar o comportamento da operação realizada. Essas funções de retorno de chamada são executadas para cada elemento do objeto (ou array) que está sendo manipulado. Exemplos: map(), filter(), find(), reduce(), forEach(), etc.

Essa diferenciação é fundamental para entender a natureza e o comportamento dos métodos em relação à personalização de operações. Os métodos imperativos são mais diretos e específicos, enquanto os métodos de ordem superior são mais flexíveis e adaptáveis, pois permitem que você forneça sua própria lógica através de funções de retorno de chamada.

Em resumo, os "métodos imperativos" são aqueles que realizam operações diretas e específicas no objeto sem a necessidade de personalização, enquanto os "métodos de ordem superior" são mais abstratos e flexíveis, permitindo personalizar o comportamento através de funções de retorno de chamada.

Métodos Imperativos:
push() "empurrar" - Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
sort() "ordenar" - Ordena os elementos de um array no lugar (modifica o array original) e retorna o array ordenado.
reverse() "inverter" - Inverte a ordem dos elementos em um array, modificando o array original e retorna o array invertido.
pop() "retirar" - Remove o último elemento de um array e o retorna.
splice() "emendar" - Modifica um array, adicionando ou removendo elementos.
slice() "fatia" - Retorna uma cópia superficial de uma parte de um array em um novo array.
join() "juntar" - Converte todos os elementos de um array em uma string, unindo-os com o separador especificado.
shift() "remover primeiro elemento" - Remove o primeiro elemento de um array e o retorna.
unshift() "deslocar" - Adiciona um ou mais elementos no início de um array e retorna o novo comprimento do array.
concat() "concatenar" -  Retorna um novo array que é uma concatenação de dois ou mais arrays.
includes() "contém" - Verifica se um array contém um determinado elemento.
fill() "preencher" - Preenche todos os elementos de um array com um valor estático.
...



Métodos de Ordem Superior:
map()
filter()
forEach()
find()
every()
some()
reduce()

...



Os nomes "métodos imperativos" e "métodos de ordem superior" refletem a natureza e o comportamento das operações que esses métodos realizam em relação aos dados.

Métodos Imperativos:
O termo "imperativo" está relacionado à forma como esses métodos operam, seguindo uma abordagem onde você instrui diretamente o que fazer com os dados ou o objeto. São chamados de "imperativos" porque você especifica explicitamente as ações a serem realizadas no objeto, como adicionar, remover ou modificar elementos. É uma abordagem mais direta e procedimental.

Métodos de Ordem Superior:
O termo "ordem superior" refere-se ao fato de que esses métodos podem aceitar ou retornar outras funções como argumentos. Em programação funcional, uma "função de ordem superior" é uma função que pode aceitar uma ou mais funções como argumentos ou pode retornar uma função como resultado. Os métodos de ordem superior em JavaScript, como map(), filter(), reduce(), etc., aceitam funções como argumentos para personalizar seu comportamento, tornando-os mais flexíveis e poderosos.

````