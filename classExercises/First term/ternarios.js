/** Crear una función que, dados dos parámetros, name y age:
 * Si name y age tienen un valor devolveremos Hola me llamo [NAME] y tengo [AGE] años
 * Si age no tiene valor pero name si devolveremos Hola me llamo [NAME]
 * Si ninguno tiene valor devolvermos No quiero decirte mi nombre, pringao
 */
function nameAndAge(name, age) {
  let res = name
    ? `Hola me llamo ${name}`
    : "No quiero decirte mi nombre, pringao";
  res = name && age ? `${res} y tengo ${age} años` : `${res}`;
  return res;
}

console.log(nameAndAge("Paco", 2));
console.log(nameAndAge("Paco"));
console.log(nameAndAge(null, 2));
console.log();

/**
 * A los alumnos y alumnas de programación de ID3 les cuesta poner los nombres de las variables. Por eso,
 * el profesor en su eterna sabiduría ha decidido que programen una función que les de nombres útiles
 * que puedan usar para sus variables.
 *
 * Programa una función, que devuelva un nombre aleatorio para una variable. La función tendrá un
 * parámetro con el número de variables que tiene que devolver. El número de variables máximo es 2
 * y el mínimo es 1.
 *
 * Si el número es 2, la función debe devolver un array con dos cadenas de texto y si es uno, debe
 * devolver una cadena de texto (no un array, solo la cadena de texto).
 *
 * El nombre de las variables siempre será ruperto[sufijo], sufijo será un número aleatorio
 */
function returnVariables(num) {
  if (num === 1 || num === 2) {
    return num === 1
      ? `ruperto${Math.floor(Math.random() * 100)}`
      : [
          `ruperto${Math.floor(Math.random() * 100)}`,
          `ruperto${Math.floor(Math.random() * 100)}`,
        ];
  }
  return "Parámetro incorrecto";
}

console.log(returnVariables(0));
console.log(returnVariables(1));
console.log(returnVariables(2));
console.log(returnVariables(3));
