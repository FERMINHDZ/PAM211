import React from "react";
import { StyleSheet, View, Text, ScrollView, Button, Alert } from "react-native";

export default function App() {
  const handleOrder = (name, price) => {
    Alert.alert(
      "Confirmar orden",
      `${name} - Precio: $${price}`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Confirmar", onPress: () => Alert.alert("Orden confirmada", `Has ordenado ${name}`) }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Restaurante Sabores del Mundo</Text>
        <Text style={styles.description}>
          Descubre una experiencia culinaria única con ingredientes frescos y platillos internacionales.
        </Text>
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Entradas</Text>
        <View style={styles.dish}>
          <Text style={styles.dishName}>Bruschetta</Text>
          <Text style={styles.dishDesc}>Pan tostado con tomate, ajo y albahaca.</Text>
          <Text style={styles.price}>$80</Text>
          <Button title="Ordenar" onPress={() => handleOrder("Bruschetta", 80)} />
        </View>

        <View style={styles.dish}>
          <Text style={styles.dishName}>Ensalada Caprese</Text>
          <Text style={styles.dishDesc}>Rodajas de tomate, mozzarella y albahaca fresca.</Text>
          <Text style={styles.price}>$90</Text>
          <Button title="Ordenar" onPress={() => handleOrder("Ensalada Caprese", 90)} />
        </View>
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Platos Principales</Text>
        <View style={styles.dish}>
          <Text style={styles.dishName}>Salmón a la Parrilla</Text>
          <Text style={styles.dishDesc}>Salmón fresco con salsa de limón y hierbas.</Text>
          <Text style={styles.price}>$220</Text>
          <Button title="Ordenar" onPress={() => handleOrder("Salmón a la Parrilla", 220)} />
        </View>

        <View style={styles.dish}>
          <Text style={styles.dishName}>Pasta Alfredo</Text>
          <Text style={styles.dishDesc}>Fetuccini con cremosa salsa Alfredo y parmesano.</Text>
          <Text style={styles.price}>$180</Text>
          <Button title="Ordenar" onPress={() => handleOrder("Pasta Alfredo", 180)} />
        </View>
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Bebidas</Text>
        <View style={styles.dish}>
          <Text style={styles.dishName}>Limonada Fresca</Text>
          <Text style={styles.dishDesc}>Refrescante bebida natural con limón y menta.</Text>
          <Text style={styles.price}>$45</Text>
          <Button title="Ordenar" onPress={() => handleOrder("Limonada Fresca", 45)} />
        </View>

        <View style={styles.dish}>
          <Text style={styles.dishName}>Copa de Vino Tinto</Text>
          <Text style={styles.dishDesc}>Vino seleccionado para acompañar tus platillos.</Text>
          <Text style={styles.price}>$95</Text>
          <Button title="Ordenar" onPress={() => handleOrder("Copa de Vino Tinto", 95)} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15
  },
  header: {
    alignItems: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center"
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginTop: 5
  },
  category: {
    marginBottom: 25
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#222"
  },
  dish: {
    marginBottom: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 10
  },
  dishName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  dishDesc: {
    fontSize: 13,
    color: "#555",
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2e8b57",
    marginBottom: 4
  }
});
