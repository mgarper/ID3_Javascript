function luckCheck(ticket) {
  // 8 --> 0,1,2,3  4,5,6,7
  // 9 --> 0,1,2,3 4 5,6,7,8
  //[0,(length-1)/2)  y ((length-1)/2), length)
  console.log(ticket);

  let tLength = ticket.length;
  const numStr = "0123456789"; // String que contiene todos los números individuales

  if (tLength <= 1) {
    // Si es 0, se lanza error de String vacio
    throw new Error("String is empty!");
  }

  let half = (tLength - 1) / 2;

  let sum1 = 0;
  let sum2 = 0;

  // Si es impar, reconstruimos el String omitiendo el valor central, para tratarlos todos como pares
  if (tLength % 2 != 0) {
    if (!numStr.includes(ticket.charAt(half))) {
      throw new Error("Parameter is not a number!");
    }
    ticket = ticket.substring(0, half) + ticket.substring(half + 1, tLength);
    tLength = ticket.length;
    half = (tLength - 1) / 2;
  }

  let num;
  let i = 0; // iterador

  /*
    Iteramos la primera mitad del ticket. Si el nº comprobado no es un Number, lanza un error. En caso contrario,
    se extrae el valor numérico y se añado a la suma 1.
    */
  while (i < half) {
    num = ticket.charAt(i);
    if (!numStr.includes(num)) {
      throw new Error("Parameter is not a number!");
    } else {
      num = Number(ticket.charAt(i));
      sum1 += num;
      i++;
    }
  }

  /*
    Iteramos la segunda mitad del ticket. Si el nº comprobado no es un Number, lanza un error. En caso contrario,
    se extrae el valor numérico y se añade a la suma 2. Si tras incrementar la suma 2, esta es mayor que la 1,
    devolvemos false para ahorrar iteraciones
    */

  while (i < tLength) {
    num = ticket.charAt(i);
    if (!numStr.includes(num)) {
      throw new Error("Parameter is not a number!");
    } else {
      num = Number(ticket.charAt(i));
      sum2 += num;
      i++;
    }
  }

  //Si termina la ejecución de ambos bloques, comprobamos si sum1 y sum2 son iguales
  return sum1 == sum2;
}
