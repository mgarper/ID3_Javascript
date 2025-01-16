/**
 * 1. Averigua qué hace la siguiente función
 */

/**
 * Es una función que devuelve, si existe, el nombre de un archivo en función de una ruta especificada.
 * Si includeExtension es true, la extensión del fichero se devuelve junto al nombre de este.
 */
const getFileNameFromUrl = (url, includeExtension = false) => {
  try {
    const urlObject = new URL(url);
    if (urlObject) {
      const fileName = urlObject.pathname.split("/").pop(); //Separa la URL por barras o directorios y obtiene el último elemento, correspondiente al fichero
      if (fileName) {
        if (includeExtension) return fileName;
        return getFileNameWithoutExtension(fileName);
      }
    }
  } catch (error) {
    console.error("Cannot get filename from url: " + url);
  }
};

// Devuelve únicamente el nombre del archivo omitiendo todo lo que esté a partir del punto, éste incluido
const getFileNameWithoutExtension = (fileName) => {
  if (!fileName) return;
  const lastDotIndex = fileName.lastIndexOf(".");
  return lastDotIndex > 0 ? fileName.substring(0, lastDotIndex) : fileName;
};
