/*
  1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
  { product: "Red wine", price: 20, quantity: 1 },
  { product: "water", price: 1, quantity: 2 },
  { product: "Pizza carbonara", price: 10, quantity: 3 },
  { product: "Tiramisú", price: 5.99, quantity: 2 },
];

function calculateTotalPrice(list) {
  let totalPrice = 0;
  list.forEach((element) => {
    totalPrice += element.price * element.quantity;
  });
}
calculateTotalPrice(shoppingCart);

/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. A continuación filtra el array para mostrar todas las 
  tareas que están completadas y luego todas las tareas que están pendientes.
*/
let taskList = [
  { task: "Hacer la compra", status: "Completada" },
  { task: "Lavar la ropa", status: "Completada" },
  { task: "Fregar los platos", status: "Pendiente" },
  { task: "Hacer los deberes", status: "Pendiente" },
];

function filterTasks(list) {
  let pendingTasks = [];
  let completedTasks = [];
  list.forEach((element) => {
    if (element.status === "Pendiente") {
      pendingTasks.push(element);
    } else {
      completedTasks.push(element);
    }
  });
}

filterTasks(taskList);

/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const frutas = [
  "manzana",
  "pera",
  "granada",
  "platano",
  "uva",
  "melón",
  "sandía",
];

function showTreeOrNotTreeFruit(list) {
  const treeFruits = ["manzana", "pera", "granada", "platano"];
  let res = [];
  list.forEach((element) => {
    if (treeFruits.indexOf(element) !== -1) {
      res.push({ fruit: element, isTreeFruit: true });
    } else {
      res.push({ fruit: element, isTreeFruit: false });
    }
  });
  return res;
}

console.log(showTreeOrNotTreeFruit(frutas));

/** 3 BIS */
const treeFruits = ["manzana", "pera", "granada", "platano"];

function showNotTreeFruit(element) {
  return !treeFruits.includes(element);
}

function showTreeFruit(element) {
  return treeFruits.includes(element);
}

console.log(frutas);
console.log("No crecen en árbol: " + frutas.filter(showNotTreeFruit));
console.log("Crecen en árbol: " + frutas.filter(showTreeFruit));

console.log(
  frutas.map((fruit) => {
    return { fruitName: fruit, growsInTree: treeFruits.includes(fruit) };
  })
);

console.log(
  frutas.find((element) => {
    return !treeFruits.includes(element);
  })
);

/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/

function addTaxes(list) {
  let res = [];
  list.forEach((element) => {
    element.taxes = element.price * 0.1;
    res.push(element);
  });
  return res;
}

/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

function removeProduct(list, product) {
  let res = [];
  list.forEach((element) => {
    if (element.product === product) {
      if (element.quantity > 1) {
        element.quantity = element.quantity - 1;
        res.push(element);
      }
    } else {
      res.push(element);
    }
  });
  return res;
}

/**FUNCION DEL EJERCICIO PROPUESTO POR JOSMI */
function filterArray(list, func) {
  let res = [];
  list.forEach((element) => {
    if (func(element, list.indexOf(element))) {
      res.push(element);
    }
  });
  return res;
}

function isCompleted(task, index) {
  return task.status === "Completada";
}
