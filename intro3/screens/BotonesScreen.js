import { Text, StyleSheet, View, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';

export default function BotonesScreen() {
  const [prendido, setPrendido] = useState(false);
  const backgroundColor = prendido ? '#F5F5F5' : '#121212'; 
  const textColor = prendido ? '#000' : '#FFF'; 

  return (
    <View style={[styles.container, {backgroundColor}]}>
      
      <Text style={[styles.texto, {color: textColor}]}>
        Estado: {prendido ? 'Prendido' : 'Apagado'}
      </Text>

      <TouchableOpacity
        style={styles.botonEncendido}
        onPress={() => setPrendido(true)}>
        <Text style={styles.textoBoton}>PRENDER</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonApagado}
        onPress={() => setPrendido(false)}>
        <Text style={styles.textoBoton}>APAGAR</Text>
      </TouchableOpacity>

      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, {color: textColor}]}>Control de Switch:</Text>
        <Switch value={prendido} onValueChange={setPrendido} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B77272', // ⚠ Este valor se sobrescribe dinámicamente
  },
  texto: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  botonEncendido: {
    backgroundColor: '#0C9600',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 15,
  },
  botonApagado: {
    backgroundColor: '#B10000',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 25,
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', //  También se sobrescribe dinámicamente
    marginRight: 10,
  },
});










