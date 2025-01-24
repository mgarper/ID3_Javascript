const AVAILABLE_NETWORKS = [
  "twitter",
  "facebook",
  "instagram",
  "tiktok",
  "youtube",
];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tiktok: false,
  youtube: false,
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: "josmidgg",
  facebook: undefined,
  instagram: "gutufacio",
  tiktok: undefined,
  youtube: undefined,
};

const CONNECTED_NETWORKS_ACCOUNTS_2 = {
  twitter: "232424124314",
  facebook: undefined,
  instagram: "gutufacio",
  tiktok: undefined,
  youtube: "robustio",
};

const isConnected = (network) => {
  return CONNECTED_NETWORKS[network.toLowerCase()];
};

/**
 * 1. Intenta deducir qué hace el código de arriba y escríbelo aquí.
 */

// Dado el nombre de una red, devuelve si se ha conectado o no a dicha red

/**
 * 2. Crea una función que, dado el nombre de una red social, te diga cual es la cuenta del usuario
 */

const getUsername = (network) => {
  return CONNECTED_NETWORKS_ACCOUNTS_2[network.toLowerCase()];
};

/**
 * 3. Crea una función que, dado un array de redes sociales, te devuelva otro array indicando la red,
 * si está conectada y con el nombre de usuario si la red está conectada.
 *
 * Por ejemplo, con el array ['twitter', 'youtube'], debería devolverte un array
 * [{ network: 'twitter', isConnected: true, username: 'josmidgg' }, { network: 'youtube', isConnected: false }]
 */

const networkStatus = (networks) => {
  let res = [];
  networks.forEach((element) => {
    let appendable = {};
    appendable.network = element;
    appendable.isConnected = isConnected(element);
    if (getUsername(element) !== undefined) {
      appendable.username = isNaN(Number(getUsername(element)))
        ? getUsername(element)
        : "Usuario anónimo";
    }
    res.push(appendable);
  });
  return res;
};

console.log(networkStatus(AVAILABLE_NETWORKS));

/**
 * 4. modifica la función isConnected y la función del ejercicio 2 para que ignore mayúsculas y salga el
 * mismo resultado si el usuario pone 'twitter' o 'tWiTter'
 */

// HECHO

/**
 * 5. Crea un objeto cuyas propiedades sean la red social con un nombre correcto para javascript y cuyo valor sea el nombre de la
 * red social. Por ejemplo el valor de la propiedad tikTok sería Tik Tok
 */

const socialNetworks = {
  twitter: "Twitter",
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "Tik Tok",
  youtube: "YouTube",
};

/**
 * 6. Crea una función que dado un array de redes sociales, te devuelva la misma información del ejercicio 3
 * incluyendo el nombre de la red social.
 */

const networkStatus2 = (networks) => {
  let res = [];
  networks.forEach((element) => {
    let appendable = {};
    appendable.network = socialNetworks[element.toLowerCase()];
    appendable.isConnected = isConnected(element);
    if (getUsername(element) !== undefined) {
      appendable.username = isNaN(Number(getUsername(element)))
        ? getUsername(element)
        : "Usuario anónimo";
    }
    res.push(appendable);
  });
  return res;
};

console.log(networkStatus2(AVAILABLE_NETWORKS));

/**
 * 7. Crea una función que dado un array de redes sociales, devuelva lo mismo que la función 6 pero solo
 * de las redes que están conectadas sin modificar la función 6.
 */

const networkStatus3 = (networks) => {
  let res = [];
  networks.forEach((element) => {
    if (isConnected(element)) {
      let appendable = {};
      appendable.network = socialNetworks[element.toLowerCase()];
      appendable.isConnected = isConnected(element);
      appendable.username = isNaN(Number(getUsername(element)))
        ? getUsername(element)
        : "Usuario anónimo";
      res.push(appendable);
    }
  });
  return res;
};

/**
 * 8. Algunas redes sociales no te dan el nombre correcto del usuario y te dan un número muy largo como cadena
 * de texto. Dado el siguiente objeto, modifica las funciones necesarias anteriores para que en ese caso,
 * el nombre del usuario que devuelva sea "Usuario anónimo" en todos los casos.
 */

// HECHO

/**
 * 9. Crea una función a la que le vamos a pasar un único parámetro, la red social. Usando alguna de las
 * funciones que has creado anteriormente y una de las variables definidas (deduce cual), debe devolver
 * el nombre del usuario en esa red social si tenemos su información, o 'Nunca has conectado tu cuenta'
 * si no la tenemos.
 */

const usernameInfo = (network) => {
  let infoList = networkStatus(AVAILABLE_NETWORKS);
  let res = infoList.find((element) => {
    return element.network === network;
  }).username;
  return res === undefined ? "Nunca has conectado tu cuenta" : res;
};

AVAILABLE_NETWORKS.forEach((element) => {
  console.log(usernameInfo(element));
});

/**
 * 10. Modifica todas las funciones anteriores para que sean Arrow functions
 */

// HECHO

/**
 * 11. Algunas redes sociales se pueden conectar de distintas formas en función de ciertas características.
 * Por ejemplo, Tik Tok se puede conectar con cuentas business y cuentas personales. Sin embargo, si tienes
 * una cuenta de tipo business no puedes conectar una de tipo personal y viceversa.
 *
 * Modifica todos los ejercicios anteriores para que tikTok no exista y se convierta en tikTokBusiness
 * y tikTokPersonal, pero que el usuario solo tenga que introducir tikTok.
 *
 * Por ejemplo, si tikTokPersonal o tikTokBusiness están conectado, al introducir isConnected('tikTok') debería
 * decir true.
 */
