import React, { useState } from 'react'; //añadir usestate
import { View, Text, TextInput, Button, Alert, Platform, StyleSheet } from 'react-native'; //añadir las funciones a usar textimput button y plataform y alert

export default function TextInputScreen() {
  const [nombre, setNombre] = useState('');//declarando como constante tu cuadro de texto

  const mostrarAlerta = () => {//en este te muestra la comparacion
    if (nombre.trim() === '') { //comparar con iguales las respuestas del usuario si no se escribe ñada añadira un error
      
      if (Platform.OS === 'web') {// aqui es para que corra en plataforma web
        window.alert('Error: Por favor ingresa tu nombre');//este es para que funcione en windows
      } else {
        Alert.alert('Error', 'Por favor ingresa tu nombre');//este es para que funcione en telefonos
      }
    } else {
      // Si sí hay nombre
      if (Platform.OS === 'web') { 
        window.alert(`¡Hola ${nombre}! Bienvenido`); ////este es para que funcione en macOS
      } else {
        Alert.alert('¡Hola!', `¡Bienvenido ${nombre}!`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Práctica: TextInput & Alert</Text>

      <TextInput
        style={styles.nombres}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
        maxLength={50}
      />

      <TextInput
        style={styles.nombres}
        placeholder="Escribe tu contraseña"
        secureTextEntry={true}   
        maxLength={20}
     />

         <TextInput
      style={[styles.nombres, { height: 100, textAlignVertical: 'top' }]}
      placeholder="Escribe un comentario"
      multiline={true}
      numberOfLines={4}
      maxLength={200}
    />

      <Button color="blue" title="Mostrar saludo" onPress={mostrarAlerta} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ad1edff',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  nombres: {
    borderWidth: 1,
    borderColor: '#0f0e0eff',
    padding: 10,
    marginBottom: 20,
    width: '80%',
    borderRadius: 8,
  },
});
