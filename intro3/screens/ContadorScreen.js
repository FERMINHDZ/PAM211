//1. Zona importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

//2. Zona de main o componentes
export default function ContadorScreen() {

  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      {/* Mostrar el contador con dos estilos distintos */}
      <Text style={styles.texto}>Contador: {contador}</Text>
      <Text style={styles.texto2}>Valor actual: {contador}</Text>

      {/* Contenedor de botones */}
      <View style={styles.botonesContainer}>
        <Button color='orange' title='Agregar' onPress={() => setContador(contador + 1)} />
        <Button color='red' title='Quitar' onPress={() => setContador(contador - 1)} />
        <Button color='blue' title='Reiniciar' onPress={() => setContador(0)} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

//3. Zona de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    color: '#0800f4ff',
    fontSize: 30,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },

  texto2: {
    color: '#fcae06',
    fontSize: 40,
    fontFamily: 'Lobster_400Regular',
    fontWeight: '900',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },

  botonesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
  },
});
