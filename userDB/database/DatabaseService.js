import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
    constructor() {
        this.db = null;
        this.storageKey = 'usuarios';
    }

    // ------------------------------------------------------------
    // 1. Inicializar BD (web: localStorage / móvil: SQLite)
    // ------------------------------------------------------------
    async initialize() {
        if (Platform.OS === 'web') {
            console.log('Usando LocalStorage para web');
        } else {
            console.log('Usando SQLite para móvil');
            this.db = await SQLite.openDatabaseAsync('miapp.db');
            await this.db.execAsync(`
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `);
        }
    }

    // ------------------------------------------------------------
    // 2. Obtener todos los usuarios
    // ------------------------------------------------------------
    async getAll() {
        if (Platform.OS === 'web') {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } else {
            return await this.db.getAllAsync(
                'SELECT * FROM usuarios ORDER BY id DESC'
            );
        }
    }

    // ------------------------------------------------------------
    // 3. Insertar un usuario
    // ------------------------------------------------------------
    async add(nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const nuevoUsuario = {
                id: Date.now(),
                nombre,
                fecha_creacion: new Date().toISOString()
            };
            usuarios.unshift(nuevoUsuario);
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            return nuevoUsuario;
        } else {
            const result = await this.db.runAsync(
                'INSERT INTO usuarios(nombre) VALUES(?)',
                nombre
            );
            return {
                id: result.lastInsertRowId,
                nombre,
                fecha_creacion: new Date().toISOString()
            };
        }
    }

    // ------------------------------------------------------------
    // 4. Actualizar un usuario (NUEVO)
    // ------------------------------------------------------------
    async update(id, nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const usuarioIndex = usuarios.findIndex(u => u.id == id);
            
            if (usuarioIndex === -1) {
                throw new Error('Usuario no encontrado');
            }
            
            usuarios[usuarioIndex].nombre = nombre;
            usuarios[usuarioIndex].fecha_creacion = new Date().toISOString();
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            
            return usuarios[usuarioIndex];
        } else {
            const result = await this.db.runAsync(
                'UPDATE usuarios SET nombre = ?, fecha_creacion = CURRENT_TIMESTAMP WHERE id = ?',
                nombre, id
            );
            
            if (result.changes === 0) {
                throw new Error('Usuario no encontrado');
            }
            
            return {
                id: id,
                nombre: nombre,
                fecha_creacion: new Date().toISOString()
            };
        }
    }

    // ------------------------------------------------------------
    // 5. Eliminar un usuario (NUEVO)
    // ------------------------------------------------------------
    async delete(id) {
        if(Platform.OS === 'web'){
           const usuarios = await this.getAll();
           const nuevosUsuarios = usuarios.filter(u => u.id !==id);
           return true; 
        } else {
            await this.db.runAsync(
                'DELETE FROM usuarios WHERE id = ?',
                id
            );
            return true;
        }
    }
}

export default new DatabaseService();