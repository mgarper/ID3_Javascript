// URL de la API
const apiUrl = 'https://dog.ceo/api';

// Función para realizar la llamada a la API
async function fetchRandomDogImage() {
  try {
    let apiCustomUrl = apiUrl + '/breeds/image/random';
    // Realizamos la solicitud a la API
    const response = await fetch(apiCustomUrl);

    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Convertimos la respuesta a formato JSON
    const data = await response.json();

    // Mostramos la URL de la imagen en la consola
    return data.message;
  } catch (error) {
    // Capturamos y mostramos cualquier error ocurrido durante la petición
    console.error('Error al obtener la imagen:', error.message);
  }
}

async function fetchRandomDogBreedImage(breed) {
  try {
    let apiCustomUrl = `${apiUrl}/breed/${breed}/images/random`;
    // Realizamos la solicitud a la API
    const response = await fetch(apiCustomUrl);

    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Convertimos la respuesta a formato JSON
    const data = await response.json();

    // Mostramos la URL de la imagen en la consola
    return data.message;
  } catch (error) {
    // Capturamos y mostramos cualquier error ocurrido durante la petición
    console.error('Error al obtener la imagen:', error.message);
  }
}

async function listAllBreeds() {
  try {
    let apiCustomUrl = apiUrl + '/breeds/list/all';
    // Realizamos la solicitud a la API
    const response = await fetch(apiCustomUrl);

    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Convertimos la respuesta a formato JSON
    const data = await response.json();

    // Mostramos la URL de la imagen en la consola
    return data.message;
  } catch (error) {
    // Capturamos y mostramos cualquier error ocurrido durante la petición
    console.error('Error al obtener la imagen:', error.message);
  }
}