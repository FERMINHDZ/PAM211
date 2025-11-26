import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    // Inicializar el controlador con el Service
    async initialize() {
        await DatabaseService.initialize();
    }

    // Obtener usuarios
    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }

    // Crear usuario
    async crearUsuario(nombre) {
        try {
            // 1. Validar datos
            Usuario.validar(nombre);

            // 2. Insertar en BD
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            // 3. Notificar a los observadores
            this.notifyListeners();

            // 4. Retornar usuario creado
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }

    // Actualizar usuario (NUEVO)
    async actualizarUsuario(id, nombre) {
        try {
            // 1. Validar datos
            Usuario.validar(nombre);

            // 2. Actualizar en BD
            const usuarioActualizado = await DatabaseService.update(id, nombre.trim());

            // 3. Notificar a los observadores
            this.notifyListeners();

            // 4. Retornar usuario actualizado
            return new Usuario(
                usuarioActualizado.id,
                usuarioActualizado.nombre,
                usuarioActualizado.fecha_creacion
            );
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            throw error;
        }
    }

    // Eliminar usuario (NUEVO)
    async eliminarUsuario(id) {
        try {
            // 1. Eliminar de la BD
            await DatabaseService.delete(id);

            // 2. Notificar a los observadores
            this.notifyListeners();

            // 3. Retornar confirmación
            return { id: id, mensaje: 'Usuario eliminado correctamente' };
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            throw error;
        }
    }

    // Sistema de observadores para actualizar la vista automáticamente
    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}