/*
  1. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
*/
let taskList = [
  { task: "Hacer la compra", status: "Completada" },
  { task: "Lavar la ropa", status: "Completada" },
  { task: "Fregar los platos", status: "Pendiente" },
  { task: "Hacer los deberes", status: "Pendiente" },
];

function getPendingTasks(list) {
  let pendingTasks = [];
  list.forEach((element) => {
    if (element.status === "Pendiente") {
      pendingTasks.push(element.task);
    }
  });
  return pendingTasks;
}
console.log(getPendingTasks(taskList));

/*
  2. Crea un array que contenga un listado de vehículos. Usa al menos 5 propiedades en cada vehículo. 
*/

let carList = [
  {
    engine: "Diésel",
    numDoors: 2,
    outerColor: "Rojo",
    seatColor: "Blanco",
    numSeats: 2,
  },
  {
    engine: "Gasolina",
    numDoors: 2,
    outerColor: "Negro",
    seatColor: "Gris",
    numSeats: 4,
  },
  {
    engine: "Eléctrico",
    numDoors: 4,
    outerColor: "Blanco",
    seatColor: "Gris",
    numSeats: 5,
  },
  {
    engine: "Híbrido",
    numDoors: 4,
    outerColor: "Azul",
    seatColor: "Negro",
    numSeats: 5,
  },
];

function getElectricCars(list) {
  let electricCars = [];
  list.forEach((element) => {
    if (element.engine === "Eléctrico") {
      electricCars.push(element);
    }
  });
  return electricCars;
}
console.log(getElectricCars(carList));

/*
  3. Imagina que estás en un supermercado haciendo la compra y tienes que comprar lo que está 
  en la variable shoppingList.

  Crea una función a la que le pases dos parámetros, el array de la compra, y el elemento que has comprado
  esa función debe buscar el elemento en el array y eliminarlo.

  Por ejemplo, si le paso un array ['pepino', 'tomate', 'sandía'] y el string 'tomate', debe devolver un array ['pepino', 'sandía']
*/
const shoppingList = [
  "x2 leche de coco",
  "pimiento rojo",
  "pimiento verde",
  "x6 garrafas de agua",
  "aguacates",
  "avena",
  "tomate frito",
  "pepino",
];

function reduceShoppingListA(list, product) {
  // Sin modificar
  let aux = [...list];
  aux.splice(aux.indexOf(product), 1);
  return aux;
}
console.log(reduceShoppingListA(shoppingList, "aguacates"));
console.log(shoppingList);

/**
 * 4. Repite el ejercicio anterior sin modificar el array que le pasas como parámetro a la función.
 * Si ya has hecho el ejercicio anterior sin modificar el array, hazlo modificándolo.
 */
function reduceShoppingListB(list, product) {
  // Modificando
  list.splice(list.indexOf(product), 1);
  return list;
}
console.log(reduceShoppingListB(shoppingList, "aguacates"));
console.log(shoppingList);
