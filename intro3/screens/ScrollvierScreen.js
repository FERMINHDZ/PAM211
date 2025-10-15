import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class ScrollvierScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollArea}
         showsVerticalScrollIndicator={true}>
        <Text Text style={styles.item}>Elemento 1</Text>
        <Text Text style={styles.item}>Elemento 2</Text>
        <Text Text style={styles.item}>Elemento 3</Text>
        <Text Text style={styles.item}>Elemento 4</Text>
        <Text Text style={styles.item}>Elemento 5</Text>
        <Text Text style={styles.item}>Elemento 6</Text>
        <Text Text style={styles.item}>Elemento 7</Text>
        <Text Text style={styles.item}>Elemento 8</Text>
        <Text Text style={styles.item}>Elemento 9</Text>
        <Text Text style={styles.item}>Elemento 10</Text>
        <Text Text style={styles.item}>Elemento 11</Text>
        <Text Text style={styles.item}>Elemento 12</Text>
        <Text Text style={styles.item}>Elemento 13</Text>
        <Text Text style={styles.item}>Elemento 14</Text>
        <Text Text style={styles.item}>Elemento 15</Text>
        <Text Text style={styles.item}>Elemento 16</Text>
        <Text Text style={styles.item}>Elemento 17</Text>
        <Text Text style={styles.item}>Elemento 18</Text>
        <Text Text style={styles.item}>Elemento 19</Text>
        <Text Text style={styles.item}>Elemento 20</Text>
        <Text Text style={styles.item}>Elemento 21</Text>
        <Text Text style={styles.item}>Elemento 22</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c85fe0ff',
        paddingTop: 40,
    },
      // Este estilo controla TODO lo que está DENTRO del ScrollView
  scrollArea: {
    alignItems: 'center', // Centra los elementos horizontalmente
    padding: 10,          // Le da espacio interno para que no se peguen
  },
 item: {
    fontSize: 18,              // Tamaño del texto
    backgroundColor: '#4CAF50', // Fondo verde tipo botón
    color: '#fff',              // Color del texto
    padding: 13,                // Espacio interno del botón
    marginVertical: 6,          // Separación entre cada elemento
    borderRadius: 6,            // Bordes redondeados
    textAlign: 'center',        // Centrar el texto
    fontWeight: 'bold',         // Texto en negrita
  }

})