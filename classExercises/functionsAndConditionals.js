/*
  Crear una función que me diga si un número está entre 0 y 10  
   => utilizar un return;
*/
function betweenZeroAndTen(n) {
  return n >= 0 && n <= 10;
}
console.log("Ejercicio 1");
console.log(betweenZeroAndTen(-1));
console.log(betweenZeroAndTen(5));
console.log(betweenZeroAndTen(11));
console.log();

/*
  Crea una función que me diga si un parámetro es de tipo cadena de texto o número.
*/
function stringOrNumber(p) {
  return typeof p;
}
console.log("Ejercicio 2");
console.log(stringOrNumber(0));
console.log(stringOrNumber("0"));
console.log();

/*
  Crea una función que me diga si una cadena de texto tiene el valor 'pending'. Debe ser case insensitive, es decir,
  me dirá "true" en todas las variantes mayúsculas/minúsculas de este texto: 'Pending', 'PEnding', 'PeNdIng', etc.
*/
function isPending(a) {
  return typeof a === "string" && a.toLowerCase() === "pending";
}
console.log("Ejercicio 3");
console.log(isPending("Zapato"));
console.log(isPending("pending"));
console.log(isPending("Pending"));
console.log(isPending("pEnding"));
console.log(isPending("peNding"));
console.log(isPending("penDing"));
console.log(isPending("pendIng"));
console.log(isPending("pendiNg"));
console.log();

/*
  Crea una función que simule una compra con tarjeta de crédito. Tendrá tres parámetros: 
    - El precio del producto
    - El dinero gastado este mes
    - El límite mensual
  Si me queda dinero suficiente para comprar el producto, la función debe devolver el dinero gastado este
  mes incluyendo el precio del producto. Si no puedo comprar el producto pq el dinero no me da, debe escribir 
  en pantalla un mensaje diciendo que no se puede comprar por llegar al límite mensual.
*/
function saleSimulator(price, spent, limit) {
  return limit - spent >= price
    ? spent + price
    : "You have surpassed your monthly limit";
}
console.log("Ejercicio 4");
console.log(saleSimulator(100, 50, 100));
console.log(saleSimulator(100, 0, 100));
console.log(saleSimulator(99, 1, 100));
console.log();

/*
  Crea una función que indique si un número es par o impar.
*/
function isEven(n) {
  return n % 2 === 0;
}
console.log("Ejercicio 5");
console.log(isEven(2));
console.log(isEven(3));
console.log();

/*
  Crea una función que indique el mayor de dos números
*/
function greaterNumber(n1, n2) {
  if (n1 !== n2) {
    return n1 > n2
      ? `First one is greater and equal to ${n1}`
      : `Second one is greater and equal to ${n2}`;
  } else {
    return "They're equal";
  }
}
console.log("Ejercicio 6");
console.log(greaterNumber(5, 6));
console.log(greaterNumber(5, 5));
console.log(greaterNumber(6, 5));
console.log();

/*
  Crea una función que indique el mayor de tres números
*/
function greaterOf3Numbers(n1, n2, n3) {
  return `The greatest number is ${Math.max(n1, n2, n3)}`;
}
console.log("Ejercicio 7");
console.log(greaterOf3Numbers(1, 2, 3));
console.log(greaterOf3Numbers(3, 1, 2));
console.log(greaterOf3Numbers(2, 3, 1));
console.log();

/*
  Crea una función que, dados dos edades, te diga cuántos años hay entre ellas
*/
function ageGap(age1, age2) {
  return Math.abs(age1 - age2);
}
console.log("Ejercicio 8");
console.log(ageGap(27, 56));
console.log();

/*
 Crea una función que al pasarle la nota de un examen (de 0 a 10) te devuelva la nota: suspenso, aprobado, bien, 
 notable o sobresaliente.
*/
function testMark(n) {
  if (n < 5) {
    return "suspenso";
  } else if (n < 6) {
    return "aprobado";
  } else if (n < 7) {
    return "bien";
  } else if (n < 9) {
    return "notable";
  } else {
    return "sobresaliente";
  }
}
console.log("Ejercicio 9");
console.log(testMark(0));
console.log(testMark(1));
console.log(testMark(2));
console.log(testMark(3));
console.log(testMark(4));
console.log(testMark(5));
console.log(testMark(6));
console.log(testMark(7));
console.log(testMark(8));
console.log(testMark(9));
console.log(testMark(10));
console.log();

/*
  Comprueba si dado un mes(Enero, Febrero...) y un día del mes (del 1 al 31), estamos en otoño, invierno, primavera o verano. 
*/
function whichSeason(month, day) {
  if (month === "Enero" || month === "Febrero") {
    return "invierno";
  } else if (month === "Abril" || month === "Mayo") {
    return "primavera";
  } else if (month === "Julio" || month === "Agosto") {
    return "verano";
  } else if (month === "Octubre" || month === "Noviembre") {
    return "otoño";
  } else {
    if (month === "Marzo") {
      return day >= 21 ? "primavera" : "invierno";
    } else if (month === "Junio") {
      return day >= 21 ? "verano" : "primavera";
    } else if (month === "Septiembre") {
      return day >= 21 ? "otoño" : "verano";
    } else {
      return day >= 21 ? "invierno" : "otoño";
    }
  }
}
console.log("Ejercicio 10");
console.log(whichSeason("Enero", "15"));
console.log(whichSeason("Febrero", "15"));
console.log(whichSeason("Abril", "15"));
console.log(whichSeason("Mayo", "15"));
console.log(whichSeason("Julio", "15"));
console.log(whichSeason("Agosto", "15"));
console.log(whichSeason("Octubre", "15"));
console.log(whichSeason("Noviembre", "15"));
console.log(whichSeason("Marzo", "20"));
console.log(whichSeason("Marzo", "21"));
console.log(whichSeason("Junio", "20"));
console.log(whichSeason("Junio", "21"));
console.log(whichSeason("Septiembre", "20"));
console.log(whichSeason("Septiembre", "21"));
console.log(whichSeason("Diciembre", "20"));
console.log(whichSeason("Diciembre", "21"));
console.log();

/*
  Crea una función que categorice vehículos en función de sus características. Tendrá tres parámetros: 
    - El número de ruedas
    - El tipo de motor, debe ser gasolina, electrico o manual
    - Si tiene pedales o no

  Esta función debe devolver 'coche', 'moto', 'patinete', 'bicicleta' o 'desconocido':
  - Los coches tienen 4 ruedas, no tienen pedales y pueden ser eléctricos o de gasolina.
  - Las motos solo tienen 2 rueda, pueden ser de gasolina y no tienen pedales
  - Las bicicletas solo tienen 2 ruedas y pueden ser eléctricas o manuales y tienen pedales. 
  - Los patinetes solo tienen 2 ruedas, pueden ser eléctricos o manuales y no tienen pedales.
  - En cualquier otro caso devuelve desconocido.
*/
function vehicleType(wheels, engine, pedals) {
  if (pedals) {
    if (wheels === 2 && (engine === "electrico" || engine === "manual")) {
      return "bicicleta";
    }
  } else {
    if (wheels === 2) {
      if (engine === "gasolina") {
        return "moto";
      } else if (engine === "electrico" || engine === "manual") {
        return "patinete";
      }
    } else if (
      wheels === 4 &&
      (engine === "electrico" || engine === "gasolina")
    ) {
      return "coche";
    }
  }
  return "desconocido";
}
console.log("Ejercicio 11");
console.log(vehicleType(2, "electrico", true));
console.log(vehicleType(2, "manual", true));
console.log(vehicleType(2, "electrico", false));
console.log(vehicleType(2, "manual", false));
console.log(vehicleType(2, "gasolina", false));
console.log(vehicleType(4, "electrico", false));
console.log(vehicleType(4, "gasolina", false));
console.log(vehicleType(3, "electrico", false));
console.log(vehicleType(2, "gasolina", true));
console.log(vehicleType(4, "manual", false));
console.log();
