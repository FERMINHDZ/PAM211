import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Platform, ActivityIndicator, Button } from 'react-native'


export default function ActivityScreen(){
  //     variable | funcion
  const [cargando, setCargando] = useState(false);   // Estado que controla si se muestra o no la ruedita de carga
  // Función para simular una carga
  const carga = () => {                                  // Función que se ejecuta al presionar el botón
    setCargando(true);                                   // Activa la ruedita de carga cambiando el estado a true
    setTimeout(() => {                                   // Inicia un temporizador de 3 segundos
    setCargando(false);                                // Desactiva la ruedita de carga volviendo el estado a false
      if (Platform.OS === 'web') {                       // Verifica si el código se ejecuta en una plataforma web
        window.alert('Carga completa');                  // Muestra una alerta en la web
      } else {                                           // Si no es web (Android o iOS)
        Alert.alert('Carga completa');                   // Muestra una alerta nativa del sistema
      }
    }, 3000);                                            // Tiempo total de la simulación (3 segundos)
  };


  return (
    <View style= {styles.container}>
      <Text style={styles.texto}>Presione para iniciar la carga</Text>
      <View style={styles.botonesContainer}>
         {cargando ? (<ActivityIndicator size='large' color='red'></ActivityIndicator>) : (<Button color='brown' title='Presione para iniciar' onPress={carga}></Button>)}
      </View>
    </View>
  )

};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#836969ff', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  texto:{
    color:'#07060aff',
    fontSize: 30, 
    fontFamily: 'Times New Roman', 
    fontWeight: 'bold', 
    fontStyle: 'Italic', 
  },
  botonesContainer:{
    marginTop: 20,
    gap:20, 
  },
})