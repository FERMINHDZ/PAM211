const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];

// 1. Buscar a Luis con .find()
const encontrado = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", encontrado);

// 2. Imprimir nombre y edad con .forEach()
personas.forEach(persona => {
    console.log(persona.nombre + " tiene " + persona.edad + " años");
});

// 3. Sumar edades con .reduce()
const sumatotal = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("La suma de las edades es: " + sumatotal);
