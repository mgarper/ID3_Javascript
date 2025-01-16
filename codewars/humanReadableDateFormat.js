export function formatDuration(seconds) {
  if (seconds) {
    let sec = seconds;
    let min = 0;
    let hour = 0;
    let days = 0;
    let years = 0;
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
          if (days >= 365) {
            years = Math.floor(days / 365);
            days = days % 365;
            size = days === 0 ? size : size + 1;
          }
        }
      }
    }
    let res = "";
    if (years) {
      res += toFormat(years, "year", size);
      size--;
    }
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
