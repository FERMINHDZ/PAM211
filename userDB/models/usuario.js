// Define y exporta una clase llamada Usuario para poder usarla en otros archivos
export class Usuario {
    
    // Constructor - se ejecuta cuando creas un nuevo Usuario con: new Usuario(...)
    constructor(id, nombre, fechaCreacion) {
        this.id = id;  
        // Asigna el ID recibido como propiedad 'id' del objeto usuario
        // Ejemplo: si llamas new Usuario(1, "Juan") → this.id = 1

        this.nombre = nombre;  
        // Asigna el nombre recibido como propiedad 'nombre' del objeto usuario
        // Ejemplo: si llamas new Usuario(1, "Juan") → this.nombre = "Juan"

        this.fechaCreacion = fechaCreacion || new Date().toISOString();
        // Si se proporciona fechaCreacion, la usa
        // Si NO se proporciona (es undefined/null), usa la fecha y hora actual
        // new Date() crea un objeto con la fecha/hora actual
        // .toISOString() la convierte a texto en formato internacional
        // Ejemplo: "2024-01-15T10:30:00.000Z"
    }

    // Método estático - se llama directamente desde la clase: Usuario.validar(nombre)
    static validar(nombre) {
        // Verifica si el nombre está vacío, null, undefined o solo espacios
        if (!nombre || nombre.trim().length === 0) {
            // Si está vacío, lanza un error que detendrá la ejecución
            throw new Error('El nombre no puede estar vacío');
        }

        // Verifica si el nombre tiene más de 50 caracteres
        if (nombre.length > 50) {
            // Si es muy largo, lanza un error
            throw new Error('El nombre no puede tener más de 50 caracteres');
        }

        // Si pasa todas las validaciones, retorna true
        return true;
    }
}

