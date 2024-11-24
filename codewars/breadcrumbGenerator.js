// Problem proposed by Giacomo Sorbi
// Link --> https://www.codewars.com/kata/563fbac924106b8bf7000046/train/javascript

function generateBC(url, separator) {
  if (url.includes("http://")) {
    url = url.substring(7);
  } else if (url.includes("https://")) {
    url = url.substring(8);
  }
  let urlElements = url.split("/");
  let length = urlElements.length;
  let words = [
    "the",
    "of",
    "in",
    "from",
    "by",
    "with",
    "and",
    "or",
    "for",
    "to",
    "at",
    "a",
  ];
  if (url.includes("index") || urlElements[length - 1] == "") {
    length = length - 1;
  }
  let res = `<a href="/">HOME</a>${separator}`;
  let i = 1;
  if (length <= 1) {
    res = `<span class="active">HOME</span>`;
  }
  let cumulativePath = "/";
  while (i < length) {
    let label;
    if (urlElements[i].length > 30) {
      label = acronym(urlElements[i], words).toUpperCase();
    } else {
      label = urlElements[i].toUpperCase();
    }
    if (i != length - 1) {
      cumulativePath += urlElements[i] + "/";
      res += `<a href="${cumulativePath}">${label.replace(
        /-/g,
        " "
      )}</a>${separator}`;
    } else {
      if (urlElements[i].includes("#") || urlElements[i].includes("?")) {
        label = removeAnchorsParameters(urlElements[i]);
        if (label.length > 30) {
          label = acronym(label, words);
        }
        label = label.toUpperCase();
      }

      if (label.includes(".")) {
        res += `<span class="active">${label
          .split(".")[0]
          .replace(/-/g, " ")}</span>`;
      } else {
        res += `<span class="active">${label.replace(/-/g, " ")}</span>`;
      }
    }
    i++;
  }
  return res;
}

function acronym(str, avoid) {
  let label = str.split("-");
  let res = "";
  for (const l of label) {
    if (!avoid.includes(l)) {
      res += l.charAt(0);
    }
  }
  return res;
}

function removeAnchorsParameters(ending) {
  let anchorPos = ending.indexOf("#");
  let paramPos = ending.indexOf("?");
  if (anchorPos !== -1 && paramPos !== -1) {
    let ignorePos = Math.min(anchorPos, paramPos);
    ending = ending.substring(0, ignorePos);
  } else if (anchorPos !== -1) {
    ending = ending.substring(0, anchorPos);
  } else {
    ending = ending.substring(0, paramPos);
  }
  return ending;
}
