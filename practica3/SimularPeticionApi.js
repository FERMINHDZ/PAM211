// Función que simula una petición a una API
function simularPeticionAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000); // simula 5 segundos de espera
  });
}

// Función asíncrona que usa await para esperar la promesa
async function obtenerDatos() {
  console.log("Esperando respuesta de la API...");
  const resultado = await simularPeticionAPI(); // espera la promesa
  console.log(resultado); // imprime el resultado cuando llega
}

// Llamada a la función
obtenerDatos();
