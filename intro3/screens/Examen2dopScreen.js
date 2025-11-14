import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  Alert,
  Dimensions,
  StatusBar,
  Platform,
  Image,
  ImageBackground,
} from 'react-native';

// Imagen de fondo y platillos
const Fondo = require('../assets/restaurante.jpeg');
const Bruschetta = require('../assets/brusheta.jpeg');
const Caprese = require('../assets/caprese.jpeg');
const Salmon = require('../assets/salmon.jpg');
const Pasta = require('../assets/pasta.jpeg');
const Limonada = require('../assets/limonada.jpg');
const TeHelado = require('../assets/te.jpeg');
const Cheesecake = require('../assets/chessecake.jpeg');
const Brownie = require('../assets/brownie.jpeg');

export default function RepasoScreen() {
  const handleOrder = (platillo, precio) => {
    if (Platform.OS === 'web') {
      window.alert(`Has ordenado ${platillo} por $${precio}`);
    } else {
      Alert.alert(
        'Confirmar orden',
        `¿Deseas ordenar "${platillo}" por $${precio}?`,
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Confirmar',
            onPress: () =>
              Alert.alert('Orden confirmada', `Has ordenado ${platillo}.`),
          },
        ]
      );
    }
  };

  return (
    <ImageBackground source={Fondo} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.restaurantName}>Restaurante Delicias Gaia</Text>
          <Text style={styles.restaurantDesc}>
            Sabores auténticos, ingredientes frescos y atención con el corazón
          </Text>
        </View>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          {/* Entradas */}
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Entradas</Text>

            <View style={styles.card}>
              <Image source={Bruschetta} style={styles.image} resizeMode="contain" />
              <Text style={styles.dishName}>Bruschetta Clásica</Text>
              <Text style={styles.dishDesc}>
                Pan artesanal con jitomate, albahaca y aceite de oliva extra virgen.
              </Text>
              <Text style={styles.price}>$85.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Bruschetta Clásica', 85)} />
            </View>

            <View style={styles.card}>
              <Image source={Caprese} style={styles.image} resizeMode="contain" />
              <Text style={styles.dishName}>Ensalada Caprese</Text>
              <Text style={styles.dishDesc}>
                Queso mozzarella, rodajas de tomate fresco y reducción balsámica.
              </Text>
              <Text style={styles.price}>$95.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Ensalada Caprese', 95)} />
            </View>
          </View>

          {/* Platos principales */}
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Platos Principales</Text>

            <View style={styles.card}>
              <Image source={Salmon} style={styles.image} resizeMode="contain" />
              <Text style={styles.dishName}>Salmón a la Parrilla</Text>
              <Text style={styles.dishDesc}>
                Filete fresco con salsa de limón y hierbas acompañado de vegetales al vapor.
              </Text>
              <Text style={styles.price}>$210.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Salmón a la Parrilla', 210)} />
            </View>

            <View style={styles.card}>
              <Image source={Pasta} style={styles.image} resizeMode="contain" />
              <Text style={styles.dishName}>Pasta Alfredo con Pollo</Text>
              <Text style={styles.dishDesc}>
                Pasta cremosa con pollo a la plancha y toque de ajo fresco.
              </Text>
              <Text style={styles.price}>$200.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Pasta Alfredo con Pollo', 200)} />
            </View>
          </View>

          {/* Bebidas */}
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Bebidas</Text>

            <View style={styles.card}>
              <Image source={Limonada} style={styles.image} resizeMode="contain" />
              <Text style={styles.dishName}>Limonada Natural</Text>
              <Text style={styles.dishDesc}>Refrescante y natural, hecha al momento.</Text>
              <Text style={styles.price}>$45.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Limonada Natural', 45)} />
            </View>

            <View style={styles.card}>
              <Image source={TeHelado} style={styles.image} resizeMode="contain" />
              <Text style={styles.dishName}>Té Helado</Text>
              <Text style={styles.dishDesc}>Té negro frío con un toque de limón y menta.</Text>
              <Text style={styles.price}>$50.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Té Helado', 50)} />
            </View>
          </View>

          {/* Postres */}
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Postres</Text>

            <View style={styles.card}>
              <Image source={Cheesecake} style={styles.image} resizeMode="contain" />
              <Text style={styles.dishName}>Cheesecake de Vainilla</Text>
              <Text style={styles.dishDesc}>Suave, cremoso y con base de galleta crocante.</Text>
              <Text style={styles.price}>$95.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Cheesecake de Vainilla', 95)} />
            </View>

            <View style={styles.card}>
              <Image source={Brownie} style={styles.image} resizeMode="contain" />
              <Text style={styles.dishName}>Brownie con Helado</Text>
              <Text style={styles.dishDesc}>Brownie tibio acompañado de helado de vainilla.</Text>
              <Text style={styles.price}>$110.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Brownie con Helado', 110)} />
            </View>
          </View>

          <View style={{ height: 60 }} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 18,
    paddingHorizontal: 18,
    backgroundColor: '#ffffffcc',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    alignItems: 'center',
  },
  restaurantName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  restaurantDesc: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
    textAlign: 'center',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  category: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2E8B57',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 14,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120, 
    borderRadius: 10,
    marginBottom: 8,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#181616',
  },
  dishDesc: {
    fontSize: 14,
    color: '#352e2e',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#28b465',
    marginBottom: 6,
  },
});




