// 1. Zona importaciones
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import ScrollvierScreen from './ScrollvierScreen';
import TextimputScreen from './TextimputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import RepasoScreen from './RepasoScreen';

// 2. Zona de main o componentes
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'image':
      return <ImageBackgroundScreen />;
    case 'scrollview':
      return <ScrollvierScreen />;
    case 'textimput':
      return <TextimputScreen />;
    case 'ActivityIndicator':
      return <ActivityIndicatorScreen />;
    case 'FlatList':
      return <FlatListScreen />;
    case 'Modal':
      return <ModalScreen />;
    case 'Repaso':
      return <RepasoScreen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          
          <Text style={styles.titulo}>Menú de Prácticas</Text>

          <View style={styles.botonesContainer}>
            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#10ffcfff' }]}
              onPress={() => setScreen('contador')}
            >
              <Text style={styles.textoBoton}>Pract: Contador</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#ff189fff' }]}
              onPress={() => setScreen('botones')}
            >
              <Text style={styles.textoBoton}>Pract: Botones</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#006195ff' }]}
              onPress={() => setScreen('image')}
            >
              <Text style={styles.textoBoton}>Pract: ImageBackground</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#0055ffff' }]}
              onPress={() => setScreen('textimput')}
            >
              <Text style={styles.textoBoton}>Pract: TextInput</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#c11befff' }]}
              onPress={() => setScreen('scrollview')}
            >
              <Text style={styles.textoBoton}>Pract: ScrollView</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#ca006cff' }]}
              onPress={() => setScreen('ActivityIndicator')}
            >
              <Text style={styles.textoBoton}>Pract: ActivityIndicator</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#058800ff' }]}
              onPress={() => setScreen('FlatList')}
            >
              <Text style={styles.textoBoton}>Pract: FlatList</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#e00202ff' }]}
              onPress={() => setScreen('Modal')}
            >
              <Text style={styles.textoBoton}>Pract: Modal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.boton, { backgroundColor: '#ff00d4ff' }]}
              onPress={() => setScreen('Repaso')}
            >
              <Text style={styles.textoBoton}>Repaso 1</Text>
            </TouchableOpacity>
            

          </View>
        </View>
      );
  }
}

// 3. Zona de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd000ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: '#1d8600ff',
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  botonesContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  boton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


