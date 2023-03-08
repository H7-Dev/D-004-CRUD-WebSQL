

let numbers = [1, 2, 3, 4, 5];
let names = ['John', 'Jane', 'Jim'];

/**
 * Arrays em JavaScript são dinâmicos e podem ser modificados adicionando, removendo ou atualizando elementos.
 * Você pode acessar elementos em um array usando um índice, que começa em 0. Por exemplo:
 *
 */

console.log(numbers[0]); // 1
console.log(names[1]); // Jane

/**
 * Arrays JavaScript têm muitos métodos embutidos úteis como push(), pop(), shift(), unshift(), slice(), splice(), sort(), reverse()etc.
 * que podem ser usados ​​para executar várias operações em arrays.
 */
console.log('/////////////////')
console.log('✍️ adicionar elemento em um array (Método push)')
let numbersB = [1, 2, 3];
console.log(numbersB);
numbersB.push(4);
console.log(numbersB); // [1, 2, 3, 4]

console.log('/////////////////')
console.log('✍️ adicionar elemento ao início de um array (Método unshift)')
let numbersC = [1, 2, 3];
numbersC.unshift(0);
console.log(numbersC); // [0, 1, 2, 3]


console.log('/////////////////')
console.log('✍️ adicionar elemento a uma posição especifica de um array (Método splice)')
let numbersD = [1, 2, 3];
numbersD.splice(1, 0, 1.5);
console.log(numbersD); // [1, 1.5, 2, 3]



console.log('/////////////////')
console.log('✍️ (assignment operator ou Directly assign) Operador de atribuição: atribua diretamente um valor a um índice em uma matriz. Esse método também pode ser usado para adicionar elementos ao final de uma matriz usando um índice maior que o último índice.')
let numbersE = [1, 2, 3];
numbersE[3] = 4;
console.log(numbersE); // [1, 2, 3, 4]



// 1.0 Existem várias maneiras de modificar elementos em uma matriz em JavaScript: