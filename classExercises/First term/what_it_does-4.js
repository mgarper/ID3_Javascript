/*
 * 1. Averigua qué debería hacer esta función. Tip: tiene cosas que pueden o no pasarse
 */
// Deberia devolver una marca de tiempo en el formado DD:HH:MM:SS
const getCountdownFormatted = (params, toDays = true) => {
  const { days, hours, minutes, seconds } = params;

  const zeroPad = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };

  const getFormattedPadOrEmpty = (value) => {
    return value === "undefined" ? "" : `${zeroPad(value)}:`;
  };

  const formattedDays = toDays ? getFormattedPadOrEmpty(days) : "";
  const formattedHours = toDays
    ? getFormattedPadOrEmpty(hours)
    : getFormattedPadOrEmpty(hours + days * 24);
  const formattedMinutes = getFormattedPadOrEmpty(minutes);

  return `${formattedDays}${formattedHours}${formattedMinutes}${zeroPad(
    seconds
  )}`;
};

/**
 * 2. Arregla los bugs de la función.
 */

// habia que cambiar la condicion a < en zeroPad

console.log(
  getCountdownFormatted({ days: 5484, hours: 0, minutes: 41, seconds: 43 })
);

/**
 * 3. Añádele un parámetro para que los días vayan en horas.
 */
console.log(
  getCountdownFormatted(
    { days: 5484, hours: 0, minutes: 41, seconds: 43 },
    false
  )
);
