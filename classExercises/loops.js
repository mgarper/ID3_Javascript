/**
 * Escribe una función que dado un número, escriba su tabla de multiplicar en consola
 * Por ejemplo si le digo 1 debe escribir:
 *  1 x 1 = 1
 *  1 x 2 = 2
 *  .........
 */
function multTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

multTable(7);
multTable(8);
multTable(9);

/**
 * Haz una función que dado un número, escriba todos los números pares desde el 0 al número introducido.
 * Por ejemplo si introduzco 6, mostrará:
 *  0
 *  2
 *  4
 *  6
 */
function getPairsTillNum(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

getPairsTillNum(27);
getPairsTillNum(56);

/**
 * Cambia la función anterior para no usar condicionales
 */
function getPairsTillNum2(n) {
  for (let i = 0; i <= n; i = i + 2) {
    console.log(i);
  }
}

getPairsTillNum2(27);
getPairsTillNum2(56);

/** Haz una función que, dado un número, escriba una cuenta atrás de ese número en pantalla.
 * Por ejemplo, si introduzco 3, escribirá:
 * 3
 * 2
 * 1
 * 0
 */
function countdown(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}
countdown(10);

/**
 * Escribe una función que acepte una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya introducido.
 */
function letterNTimes(letter, num) {
  let res = "";
  for (let i = 0; i < num; i++) {
    res += letter;
  }
  return res;
}
console.log(letterNTimes("a", 20));

/**
 * Escribe una función que dado un número, te devuelva una lista de nombres de película que te encantaría ver.
 * Los nombres de película se formarán aleatoriamente con dos arrays:
 * ['La venganza', 'El retorno', 'La comunidad', 'El reino', 'La abuela', 'Godofredo', 'Robustia', 'Pitifasio']
 * ['de los ornitorrincos salvajes', 'de los cangrejos de rio', 'de los murcianos', 'de los paparajotes', 'con cucharón']
 */
function filmList(n) {
  let res = [];
  const firstPart = [
    "La venganza",
    "El retorno",
    "La comunidad",
    "El reino",
    "La abuela",
    "Godofredo",
    "Robustia",
    "Pitifasio",
  ];
  const secondPart = [
    "de los ornitorrincos salvajes",
    "de los cangrejos de rio",
    "de los murcianos",
    "de los paparajotes",
    "con cucharón",
  ];
  for (let i = 0; i < n; i++) {
    let firstIndex = Math.floor(Math.random() * (firstPart.length - 1));
    let secondIndex = Math.floor(Math.random() * (secondPart.length - 1));
    res.push(`${firstPart[firstIndex]} ${secondPart[secondIndex]}`);
  }
  return res;
}

console.log(filmList(10));
