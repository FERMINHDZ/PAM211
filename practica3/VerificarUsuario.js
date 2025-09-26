function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    const esAdmin = usuario === "admin"; // Verifica si el usuario es "admin"
    if (esAdmin) {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}

// Aquí decides el usuario a verificar
const usuario = "admin"; 

verificarUsuario(usuario)
  .then(res => console.log(res))   // Si es admin
  .catch(err => console.error(err)); // Si no es admin

