import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground, Dimensions } from "react-native";

const SplashImage = require("../assets/I_M.jpg");

const MainBackground = require ("../assets/Gaia2.jpg");


export default function ImageBackgroundScreen({ navigation }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <ImageBackground
        source={SplashImage }
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.vineta} />

        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenido a la App</Text>
          <Text style={styles.subtitle}>Cargando...</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={MainBackground}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.mainScreen}>
        <Text style={styles.mainText}>Bienvenido a la pantalla principal.</Text>
      </View>
    </ImageBackground>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  vineta: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fc0000ff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#c10000ff",
    fontSize: 20,
  },
  mainScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 24,
    color: "#ffffffff",
  },
});

