// App.js
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, Button, Alert, Image, Dimensions,StatusBar,} from 'react-native';


const BackgroundImage = require('./assets/restaurant_bg.jpg');


const bruschetta = require('./assets/brusheta.jpeg');
const caprese = require('./assets/caprese.jpeg');
const salmon = require('./assets/salmon.jpeg');
const pasta = require('./assets/pasta.jpeg');
const limonada = require('./assets/limonada.jpeg');
const teHelado = require('./assets/te.jpeg');
const cheesecake = require('./assets/chessecake.jpeg');
const brownie = require('./assets/brownie.jpeg');

export default function App() {
  // Al presionar "Ordenar"
  const handleOrder = (platillo, precio) => {
    Alert.alert(
      'Confirmar orden',
      `¿Deseas ordenar "${platillo}" por $${precio}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: () => Alert.alert('Orden confirmada', `Has ordenado ${platillo}.`) },
      ]
    );
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View style={styles.overlay}>
        
      
        <View style={styles.header}>
          <Text style={styles.restaurantName}>Restaurante Delicias Gaia</Text>
          <Text style={styles.restaurantDesc}>
            Sabores auténticos, ingredientes frescos y atención con el corazón
          </Text>
        </View>

        
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

          
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Entradas</Text>

            <View style={styles.card}>
              <Image source={bruschetta} style={styles.dishImage} />
              <Text style={styles.dishName}>Bruschetta Clásica</Text>
              <Text style={styles.dishDesc}>
                Pan artesanal con jitomate, albahaca y aceite de oliva extra virgen.
              </Text>
              <Text style={styles.price}>$85.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Bruschetta Clásica', 85)} />
            </View>

            <View style={styles.card}>
              <Image source={caprese} style={styles.dishImage} />
              <Text style={styles.dishName}>Ensalada Caprese</Text>
              <Text style={styles.dishDesc}>
                Queso mozzarella, rodajas de tomate fresco y reducción balsámica.
              </Text>
              <Text style={styles.price}>$95.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Ensalada Caprese', 95)} />
            </View>
          </View>

          
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Platos Principales</Text>

            <View style={styles.card}>
              <Image source={salmon} style={styles.dishImage} />
              <Text style={styles.dishName}>Salmón a la Parrilla</Text>
              <Text style={styles.dishDesc}>
                Filete fresco con salsa de limón y hierbas acompañado de vegetales al vapor.
              </Text>
              <Text style={styles.price}>$210.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Salmón a la Parrilla', 210)} />
            </View>

            <View style={styles.card}>
              <Image source={pasta} style={styles.dishImage} />
              <Text style={styles.dishName}>Pasta Alfredo con Pollo</Text>
              <Text style={styles.dishDesc}>
                Pasta cremosa con pollo a la plancha y toque de ajo fresco.
              </Text>
              <Text style={styles.price}>$180.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Pasta Alfredo con Pollo', 180)} />
            </View>
          </View>

          
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Bebidas</Text>

            <View style={styles.card}>
              <Image source={limonada} style={styles.dishImage} />
              <Text style={styles.dishName}>Limonada Natural</Text>
              <Text style={styles.dishDesc}>Refrescante y natural, hecha al momento.</Text>
              <Text style={styles.price}>$45.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Limonada Natural', 45)} />
            </View>

            <View style={styles.card}>
              <Image source={teHelado} style={styles.dishImage} />
              <Text style={styles.dishName}>Té Helado</Text>
              <Text style={styles.dishDesc}>Té negro frío con un toque de limón y menta.</Text>
              <Text style={styles.price}>$40.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Té Helado', 40)} />
            </View>
          </View>

        
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Postres</Text>

            <View style={styles.card}>
              <Image source={cheesecake} style={styles.dishImage} />
              <Text style={styles.dishName}>Cheesecake de Vainilla</Text>
              <Text style={styles.dishDesc}>Suave, cremoso y con base de galleta crocante.</Text>
              <Text style={styles.price}>$95.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Cheesecake de Vainilla', 95)} />
            </View>

            <View style={styles.card}>
              <Image source={brownie} style={styles.dishImage} />
              <Text style={styles.dishName}>Brownie con Helado</Text>
              <Text style={styles.dishDesc}>Brownie tibio acompañado de helado de vainilla.</Text>
              <Text style={styles.price}>$110.00</Text>
              <Button title="Ordenar" color="#2E8B57" onPress={() => handleOrder('Brownie con Helado', 110)} />
            </View>
          </View>

          <View style={{ height: 50 }} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}


const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 18,
    paddingHorizontal: 18,
    backgroundColor: 'rgba(255,255,255,0.95)',
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
    color: '#666',
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
    marginBottom: 18,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  dishImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 10,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  dishDesc: {
    fontSize: 14,
    color: '#444',
    marginVertical: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E8B57',
    marginBottom: 8,
  },
});
