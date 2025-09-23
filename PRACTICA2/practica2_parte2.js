const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

const productosmascaros = productos.some(productos => productos.precio > 1000);

console.log(productosmascaros);

const nombre = productos
  .filter(producto => producto.precio > 1000) // filtra los caros
  .map(producto => producto.nombre);  
  
console.log(nombres); // ["Laptop", "Monitor"]
