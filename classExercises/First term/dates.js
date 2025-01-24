let defOption = {
  daysBit: true,
  hoursBit: true,
  minutesBit: true,
  secondsBit: true,
};

/**
 * 1. Crea una función que sume un número de días a una fecha.
 */
function addDaysToDate(date, days) {
  return new Date(date.getTime() + days * 86400000);
}
console.log("Exercise 1");
console.log(addDaysToDate(new Date(), 3).toLocaleDateString() + "\n");

/**
 * 2. Crea una función que reste un número de días a una fecha.
 */
function substractDaysToDate(date, days) {
  return new Date(date.getTime() - days * 86400000);
}
console.log("Exercise 2");
console.log(substractDaysToDate(new Date(), 3).toLocaleDateString() + "\n");

/**
 * 3. Modifica la función del ejercicio 1 para que sea más genérica y que permita sumar días, horas, minutos o segundos
 */
function addToDate(date, value, unit) {
  switch (unit) {
    case "day":
      return new Date(date.getTime() + value * 86400000);
    case "hour":
      return new Date(date.getTime() + value * 3600000);
    case "minute":
      return new Date(date.getTime() + value * 60000);
    case "seconds":
      return new Date(date.getTime() + value * 1000);
    default:
      return "Invalid unit";
  }
}
console.log("Exercise 3");
console.log(addToDate(new Date(), 3, "day").toLocaleString());
console.log(addToDate(new Date(), 3, "hour").toLocaleString());
console.log(addToDate(new Date(), 3, "minute").toLocaleString());
console.log(addToDate(new Date(), 3, "seconds").toLocaleString());
console.log(addToDate(new Date(), 3, "millisecond").toLocaleString() + "\n");

/**
 * 4.  Modifica la función del ejercicio 2 para que sea más genérica y que permita restar días, horas, minutos o segundos
 */
function substractToDate(date, value, unit) {
  switch (unit) {
    case "day":
      return new Date(date.getTime() - value * 86400000);
    case "hour":
      return new Date(date.getTime() - value * 3600000);
    case "minute":
      return new Date(date.getTime() - value * 60000);
    case "seconds":
      return new Date(date.getTime() - value * 1000);
    default:
      return "Invalid unit";
  }
}
console.log("Exercise 4");
console.log(substractToDate(new Date(), 3, "day").toLocaleString());
console.log(substractToDate(new Date(), 3, "hour").toLocaleString());
console.log(substractToDate(new Date(), 3, "minute").toLocaleString());
console.log(substractToDate(new Date(), 3, "seconds").toLocaleString());
console.log(
  substractToDate(new Date(), 3, "millisecond").toLocaleString() + "\n"
);

/**
 * 5. Crea una función que compruebe si una fecha está entre otras dos fechas.
 */
function isBetweenTwoDates(dateToCheck, date1, date2) {
  return dateToCheck > date1 && dateToCheck < date2 ? true : false;
}

let date1a = new Date();
let date1b = new Date("2025-01-02T15:25:38.207Z");
let date2 = new Date("2025-01-04T15:25:38.207Z");
let date3 = new Date("2025-01-19T15:25:38.207Z");
console.log("Exercise 5");
console.log(isBetweenTwoDates(date1a, date2, date3));
console.log(isBetweenTwoDates(date1b, date2, date3) + "\n");

/**
 * 6. Crea una función que devuelva cuánto tiempo ha pasado desde una fecha y la fecha actual en días, horas, minutos y segundos.
 * Por ejemplo debe devolver un string que sea, "han pasado 2 días, 4 horas, 2 minutos y 1 segundos desde [FECHA_INTRODUCIDA]}"
 *
 */
function timeBetweenTwoDates(date) {
  let difference = new Date().getTime() - date.getTime();
  return `It's been ${formatDuration(
    Math.floor(difference / 1000)
  )} since [${date.toLocaleString()}]`;
}
console.log("Exercise 6");
console.log(timeBetweenTwoDates(date2) + "\n");

/**
 * 7. Si no lo has hecho, modifica la función anterior para que no salga la información que no sea relevante. Por ejemplo, si solo han pasado
 * 10 segundos, no debería decir ni los días, las horas ni los minutos.
 */
console.log("Exercise 7");
console.log("HECHO EN EL 6\n");

/**
 * 8. Modifica la función anterior para que se le pueda pasar un objeto que permita desactivar los días, las horas, los minutos o los segundos
 * Por ejemplo, si le paso { days: false, hours: false } la función debe devolver solo los minutos y los segundos que han pasado.
 */
function timeBetweenTwoDates2(date, option) {
  let difference = new Date().getTime() - date.getTime();
  let seconds = Math.floor(difference / 1000);
  let obj = {};
  if (seconds >= 60) {
    let sec = seconds % 60;
    let min = Math.floor(seconds / 60);
    obj.seconds = sec;
    if (min >= 60) {
      let hour = Math.floor(min / 60);
      min = min % 60;
      obj.minutes = min;
      if (hour >= 24) {
        let day = Math.floor(hour / 24);
        hour = hour % 24;
        obj.hours = hour;
        obj.days = day;
      }
    }
  }
  let toIgnore = Object.keys(option);
  let finalKeys = Object.keys(obj)
    .filter((element) => {
      return !toIgnore.includes(element);
    })
    .reverse();
  let size = finalKeys.length;
  let res = "";
  finalKeys.forEach((element) => {
    if (obj[element] != 0) {
      res += toFormat(
        obj[element],
        element.substring(0, element.length - 1),
        size
      );
    }
    size--;
  });
  return `It's been ${res} since [${date.toLocaleString()}]`;
}

console.log("Exercise 8");
let filter = { days: false, hours: false };
console.log(timeBetweenTwoDates2(date2, filter) + "\n");

/**
 * 9. Crea una función como la anterior, pero que indique cuánto tiempo queda para una fecha específica.
 */
function howMuchUntilDate(date, option) {
  let difference = date.getTime() - new Date().getTime();
  let seconds = Math.floor(difference / 1000);
  let obj = {};
  if (seconds >= 60) {
    let sec = seconds % 60;
    let min = Math.floor(seconds / 60);
    obj.seconds = sec;
    if (min >= 60) {
      let hour = Math.floor(min / 60);
      min = min % 60;
      obj.minutes = min;
      if (hour >= 24) {
        let day = Math.floor(hour / 24);
        hour = hour % 24;
        obj.hours = hour;
        obj.days = day;
      }
    }
  }
  let toIgnore = Object.keys(option);
  let finalKeys = Object.keys(obj)
    .filter((element) => {
      return !toIgnore.includes(element);
    })
    .reverse();
  let size = finalKeys.length;
  let res = "";
  finalKeys.forEach((element) => {
    if (obj[element] != 0) {
      res += toFormat(
        obj[element],
        element.substring(0, element.length - 1),
        size
      );
    }
    size--;
  });
  return `It's ${res} until [${date.toLocaleString()}]`;
}
console.log("Exercise 9");
date2 = new Date("2025-01-29T15:25:38.207Z");
console.log(howMuchUntilDate(date2, {}));
console.log(howMuchUntilDate(date2, filter) + "\n");

/**
 * 10. Dado el array de ejemplo que pongo, haz una función que filtre las tareas completadas el 9 de enero durante todo el día
 */

const tasks = [
  {
    text: "Hacer la compra",
    completed: true,
    completedAt: "2025-01-10T15:54:40.088Z",
  },
  {
    text: "Ir a clase",
    completed: true,
    completedAt: "2025-01-09T15:00:40.088Z",
  },
  {
    text: "Comer a clase",
    completed: true,
    completedAt: "2025-01-09T14:00:40.088Z",
  },
  {
    text: "Repasar javascript",
    completed: false,
  },
];

function filterTasksByCompletionDay(tasks, day, month) {
  return tasks.filter((element) => {
    if (element.completed) {
      let dateArray = new Date(element.completedAt)
        .toLocaleDateString()
        .split("/");
      return day === dateArray[0] && month === dateArray[1];
    }
  });
}

console.log("Exercise 10");
console.log(filterTasksByCompletionDay(tasks, "9", "1"));

// Some functions extracted from previous kata to help completing the exercises
function formatDuration(seconds) {
  if (seconds) {
    let sec = seconds;
    let min = 0;
    let hour = 0;
    let days = 0;
    let size = 1;
    if (seconds >= 60) {
      sec = seconds % 60;
      min = Math.floor(seconds / 60);
      size = sec === 0 ? size : size + 1;
      if (min >= 60) {
        hour = Math.floor(min / 60);
        min = min % 60;
        size = min === 0 ? size : size + 1;
        if (hour >= 24) {
          days = Math.floor(hour / 24);
          hour = hour % 24;
          size = hour === 0 ? size : size + 1;
        }
      }
    }
    let res = "";
    if (days) {
      res += toFormat(days, "day", size);
      size--;
    }
    if (hour) {
      res += toFormat(hour, "hour", size);
      size--;
    }
    if (min) {
      res += toFormat(min, "minute", size);
      size--;
    }
    if (sec) {
      res += toFormat(sec, "second", size);
      size--;
    }

    return res;
  } else {
    return "now";
  }
}

function toFormat(valTime, unit, size) {
  if (size === 1) {
    return valTime > 1 ? `${valTime} ${unit}s` : `${valTime} ${unit}`;
  } else if (size === 2) {
    return valTime > 1 ? `${valTime} ${unit}s and ` : `${valTime} ${unit} and `;
  } else {
    return valTime > 1 ? `${valTime} ${unit}s, ` : `${valTime} ${unit}, `;
  }
}
