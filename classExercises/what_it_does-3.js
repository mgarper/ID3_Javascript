/**
 * 1. Averigüa qué debería hacer esta función
 */
const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

// Devuelve un objeto cuenta atrás con dias, horas, minutos y segundos a partir de un nº concreto de segundos
export const getCountdownShapeFromSeconds = (seconds) => {
  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(seconds / DAY_IN_SECONDS);
  const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);

  return {
    days: days,
    hours: hours,
    minutes: Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS),
    seconds: Math.floor(seconds % 60),
  };
};

/**
 * 2. La función no está funcionando bien, averigua qué está fallando y arréglalo.
 */

// Estaban fallando los minutos, pues se estaba realizando (seconds / HOUR_IN_SECONDS) en lugar de (seconds % HOUR_IN_SECONDS)
console.log(getCountdownShapeFromSeconds(3278192));
console.log(getCountdownShapeFromSeconds(473820103));

/**
 * 3. Añade un parámetro a la función para que el usuario pueda elegir si quiere que salgan los días como horas.
 */

export const getCountdownShapeFromSeconds2 = (seconds, days = true) => {
  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  if (days) {
    const days = Math.floor(seconds / DAY_IN_SECONDS);
    const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);

    return {
      days: days,
      hours: hours,
      minutes: Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS),
      seconds: Math.floor(seconds % 60),
    };
  }
  const hours = Math.floor(seconds / HOUR_IN_SECONDS);

  return {
    hours: hours,
    minutes: Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS),
    seconds: Math.floor(seconds % 60),
  };
};

console.log(getCountdownShapeFromSeconds2(473820103));
console.log(getCountdownShapeFromSeconds2(473820103, false));
