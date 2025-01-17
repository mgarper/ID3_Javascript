/**
 * 1. Vamos a hacer una función a la que le pasamos un número y nos va a devolver
 * un array del tamaño igual al número que le pasamos con tareas random.
 *
 * Una tarea random es una tarea con un texto aleatorio, por ejemplo "Tarea de prueba 402"
 * También tiene que tener una fecha random con un mes aleatorio entre 0 y 11, y un dia aleatorio entre 1 y 28
 * y aleatoriamente también, las tareas pueden estar completadas o no
 *
 */

const getRandomTaskArray = (size) => {
  let res = [];
  for (let i = 0; i < size; i++) {
    let task = {};
    task.name = `Tarea de prueba ${Math.round(1000 * Math.random())}`;
    task.date = new Date(
      2025,
      Math.floor(Math.random() * 11),
      Math.floor((28 - 1) * Math.random() + 1)
    );
    let numA = Math.floor(10 * Math.random());
    let numB = Math.floor(10 * Math.random());
    task.isCompleted = numA > numB;
    res.push(task);
  }
  return res;
};

/**
 * 2. Haz una función que categorice las tareas por mes, y dentro del mes, por día.
 * Por ejemplo el objeto resultante sería algo así:
 *  {
 *    0: {
 *       1: [ARRAY DE TAREAS]
 *    }
 *  }
 * En [ARRAY DE TAREAS] estarán todas las tareas del día 1 de enero.
 */

function orderByMonthDay(tasklist) {
  let res = {};
  tasklist.forEach((element) => {
    let month = element.date.getMonth();
    let day = element.date.getDay();
    if (!res[month]) {
      res[month] = {};
    } else {
      if (!res[month][day]) {
        res[month][day] = [];
      }
      res[month][day].push(element);
    }
  });
  return res;
}

let taskList = getRandomTaskArray(500);
console.log(taskList);
console.log();
console.log(orderByMonthDay(taskList));
