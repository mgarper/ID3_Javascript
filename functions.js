// Variante 1

let month = 1;
let monthName;

function getMonthName(n) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[n - 1];
}

console.log(getMonthName(month) + "\n");

// Variante 2

month = 12;
monthName;

if (month === 1) {
  monthName = "January";
} else if (month === 2) {
  monthName = "February";
} else if (month === 3) {
  monthName = "March";
} else if (month === 4) {
  monthName = "April";
} else if (month === 5) {
  monthName = "May";
} else if (month === 6) {
  monthName = "June";
} else if (month === 7) {
  monthName = "July";
} else if (month === 8) {
  monthName = "August";
} else if (month === 9) {
  monthName = "September";
} else if (month === 10) {
  monthName = "October";
} else if (month === 11) {
  monthName = "November";
} else {
  monthName = "December";
}

console.log(monthName);
console.log(getMonthName(month) + "\n");

// Variante 3

function getMonthName2(month) {
  if (month === 1) {
    return "January";
  } else if (month === 2) {
    return "February";
  } else if (month === 3) {
    return "March";
  } else if (month === 4) {
    return "April";
  } else if (month === 5) {
    return "May";
  } else if (month === 6) {
    return "June";
  } else if (month === 7) {
    return "July";
  } else if (month === 8) {
    return "August";
  } else if (month === 9) {
    return "September";
  } else if (month === 10) {
    return "October";
  } else if (month === 11) {
    return "November";
  } else {
    return "December";
  }
}

console.log(getMonthName2(1));
console.log(getMonthName2(2));
console.log(getMonthName2(3));
console.log(getMonthName2(4));
console.log(getMonthName2(5));
console.log(getMonthName2(6));
console.log(getMonthName2(7));
console.log(getMonthName2(8));
console.log(getMonthName2(9));
console.log(getMonthName2(10));
console.log(getMonthName2(11));
console.log(getMonthName2(12));
