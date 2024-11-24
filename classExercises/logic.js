/*
Escribe qué valor debe ser X e Y para que las siguientes condiciones se cumplan (den true)
Cada ejercicio puede tenenr un valor de X e y distinto
Es posible que alguna condición no se pueda dar nunca. Indica por qué
*/
let result;
let x;
let y;

// Ejemplo, x = 3, y = 1
x = 3;
y = 1;
result = x > y;
console.log(result);

//
x = 7;
y = 1;
result = x > y + 5;
console.log(result);

//
y = 6;
result = "pepito".length === y;
console.log(result);

//
x = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
y = 35;
result =
  "La venganza de los ornitorrincos salvajes".length < y + 10 && x.length === y;
console.log(result);

//
x = 5;
y = 5;
result = x >= y;
console.log(result);

//
x = "Number";
result = x !== "number";
console.log(result);

//
x = false;
y = true;
result = y && !x;
console.log(result);

//
x = 5;
y = 4;
result = y <= x || x > y;
console.log(result);

//
x = 5;
y = 29;
result = -1 + x === y - 25;
console.log(result);

// No devolverá nunca true porque si se usa typeof con una cadena para y, devolverá 'string' en lugar de 'String'
result = typeof y === "String";
console.log(result + " siempre");

//
x = 0.5;
y = 0.4;
result = x > 0 && x < 1 && y > 0 && y < x;
console.log(result);

//
x = "a";
result = x !== "" && x.length < 2;
console.log(result);

//
x = 6;
result = typeof x === "number" && x > "5";
console.log(result);

//
x = "zapato";
result = x.length > 5 && x.length < 6.0000000000001;
console.log(result);

//
x = "a";
y = "ab";
result = y.length && x.length && x.length !== y.length;
console.log(result);

// No devolverá true nunca, las cadenas solo pueden tener longitudes enteras
result = x.length > 0 && x.length < 1;
console.log(result + " siempre");

//
x = true;
y = "true";
result = typeof x === "boolean" && typeof y === "string";
console.log(result);

//
x = 5;
y = "5";
result = x !== y && x === 5 && y == 5;
console.log(result);

// Basta con que x sea false
x = false;
result = !x || (x && !y) || (y && x);
console.log(result);

//
y = "a";
x = "a";
result = y === x && y !== "number" && x.length;
console.log(result);

//
x = 99;
y = -1;
result = (!x && !y && x) || (y && x && x < 100 && y < 0);
console.log(result);

//
y = 1;
result = y !== "" && typeof y === "number";
console.log(result);

// No devolverá nunca true, pues pasa el valor de y a minúscula
y = "A";
result = y.toLowerCase().includes("A");
console.log(result + " siempre");

//
y = "";
result = y === "" && typeof y !== "number";
console.log(result);

//
y = "";
result = !y && y !== false && y !== 0;
console.log(result);

//
x = 0;
result = typeof x == "number" && !x;
console.log(result);

//
x = "5";
result =
  (x === y && x < 1 && y > 0) ||
  (x === y && x > 1 && y < 0) ||
  (x !== y && x === y + 1) ||
  x == 5;
console.log(result);

//
x = 6;
y = "abc";
result = x > 5 && y.length * 2 == x;
console.log(result);
