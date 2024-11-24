function humanReadable(seconds) {
  let sec = seconds;
  let min = 0;
  let hour = 0;
  if (seconds >= 60) {
    sec = seconds % 60;
    min = Math.floor(seconds / 60);
    if (min >= 60) {
      hour = Math.floor(min / 60);
      min = min % 60;
    }
  }
  let hh = twoDigitFormat(hour.toString());
  let mm = twoDigitFormat(min.toString());
  let ss = twoDigitFormat(sec.toString());
  return `${hh}:${mm}:${ss}`;
}

function twoDigitFormat(nn) {
  let res = nn;
  if (nn.length !== 2) {
    res = "0" + res;
  }
  return res;
}
