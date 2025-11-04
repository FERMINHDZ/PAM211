// Importamos React y el hook useState (para guardar y actualizar valores)
import React, { useState } from 'react';


// Importamos los elementos visuales que se usarán
// View → contenedor principal
// Text → para mostrar texto
// TextInput → para escribir texto
// Button → botón simple
// Alert → para mostrar alertas en celulares
// Platform → detecta si la app corre en web, Android o iOS
// StyleSheet → para los estilos
import { View, Text, TextInput, Button, Alert, Platform, StyleSheet } from 'react-native';


// Componente principal
export default function TextInputScreen() {


  // Creamos una variable "nombre" que guarda lo que el usuario escribe
  // y "setNombre" sirve para actualizar ese valor
  const [nombre, setNombre] = useState('');


  // Función que se ejecuta al presionar el botón
  const mostrarAlerta = () => {


    // Si el cuadro de texto está vacío...
    if (nombre.trim() === '') {


      // Detecta si está corriendo en una página web
      if (Platform.OS === 'web') {
        // Muestra alerta normal del navegador
        window.alert('Error: Por favor ingresa tu nombre');
      } else {
        // Muestra alerta en dispositivos móviles (Android/iOS)
        Alert.alert('Error', 'Por favor ingresa tu nombre');
      }


    } else {
      // Si sí se escribió un nombre...


      if (Platform.OS === 'web') {
        // Alerta en navegador
        window.alert(`¡Hola ${nombre}! Bienvenido`);
      } else {
        // Alerta en celular
        Alert.alert('¡Hola!', `¡Bienvenido ${nombre}!`);
      }
    }
  };


  // Todo lo que se ve en pantalla
  return (
    <View style={styles.container}>
      {/* Título principal */}
      <Text style={styles.titulo}>Práctica: TextInput & Alert</Text>


      {/* Cuadro de texto para escribir el nombre */}
      <TextInput
        style={styles.nombres}
        placeholder="Escribe tu nombre"
        value={nombre} // muestra el valor actual
        onChangeText={setNombre} // actualiza el valor al escribir
        maxLength={50} // máximo de caracteres
      />


      {/* Cuadro de texto para contraseña */}
      <TextInput
        style={styles.nombres}
        placeholder="Escribe tu contraseña"
        secureTextEntry={true} // oculta lo que se escribe (modo contraseña)
        maxLength={20}
      />


      {/* Cuadro de texto para comentarios (más grande y con varias líneas) */}
      <TextInput
        style={[styles.nombres, { height: 100, textAlignVertical: 'top' }]}
        placeholder="Escribe un comentario"
        multiline={true} // permite escribir en varias líneas
        numberOfLines={4}
        maxLength={200}
      />


      {/* Botón que ejecuta la función mostrarAlerta */}
      <Button color="blue" title="Mostrar saludo" onPress={mostrarAlerta} />
    </View>
  );
};


// Estilos visuales
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda la pantalla
    justifyContent: 'center', // centra el contenido verticalmente
    alignItems: 'center', // centra el contenido horizontalmente
    backgroundColor: '#1ad1edff', // color de fondo
    padding: 20, // espacio interno
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  nombres: {
    borderWidth: 1, // borde visible
    borderColor: '#0f0e0eff', // color del borde
    padding: 10, // espacio dentro del cuadro
    marginBottom: 20, // espacio debajo
    width: '80%', // ancho relativo al tamaño de la pantalla
    borderRadius: 8, // esquinas redondeadas
  },
});
