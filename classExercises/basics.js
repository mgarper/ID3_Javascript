/*
  Arregla los errores
*/

const firstName = "Jose Miguel";
const lastName = "González García";
const fullName = firstName + " " + lastName;
console.log(fullName);

/*
  Arregla el error
*/

let x = 2;
const y = 4;
x = y + x;
console.log(x);

/*
  Cambia la declaración de variables usando let o const
*/

const myVar1 = 1;
const myVar2 = 25;
let sum = myVar1 + myVar2;
sum = sum + 1;
console.log(sum);

/*
  Declara una variable que contenga un número, otra que contenga el texto 'Hola' y otra que contenga el texto "Hola [NUMERO]" donde el [NUMERO] será el valor de la primera variable.
*/
const num = 20;
const txt = "Hola";
const sentence = `${txt} ${num}`;
console.log(sentence);

/*
 Declara una variable con una cadena de texto y escribe en la consola el texto "Mi cadena de texto tiene [NUMERO] caracteres", donde [NUMERO] será el tamaño de esa cadena de texto. 
 Por ejemplo, si la cadena de texto es "hola", el resultado debe ser "Mi cadena de texto tiene 4 caracteres".
*/
const txt2 = "Ordenador";
console.log(`Mi cadena de texto tiene ${txt2.length} caracteres`);

/*
 Declara una variable numérica, y 3 más de tipo booleano, una que indique si es mayor que 3, otra que indique si es menor que 5 y otra que indique si es igual a 8.
*/
const num2 = 6;
const greatThree = num2 > 3;
const lessFive = num2 < 5;
const equalsEight = num2 === 8;
console.log(greatThree);
console.log(lessFive);
console.log(equalsEight);
