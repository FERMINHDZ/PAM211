//  Importaciones necesarias
import {Text, StyleSheet, View, TextInput, Switch, Button, Alert, Platform, ImageBackground, Image, Dimensions } from "react-native"; // Importamos componentes base de React Native
import React, { useEffect, useState } from "react"; // Importamos React y hooks

// Imágenes usadas
const MainBackground = require("../assets/Gaia2.jpg"); // Imagen del fondo principal
const SplashLogo = require("../assets/I_M.jpg");       // Imagen del splash

export default function RepasoScreen() {               // Declaramos el componente principal RepasoScreen
  // Estados principales
  const [showSplash, setShowSplash] = useState(true);        // Controla si se muestra el splash
  const [nombre, setNombre] = useState("");                  // Guarda el nombre ingresado
  const [correo, setCorreo] = useState("");                  // Guarda el correo ingresado
  const [aceptaTerminos, setAceptaTerminos] = useState(false); // Guarda el estado del switch

  // Efecto para controlar el splash
  useEffect(() => {                                          // Efecto que se ejecuta al montar el componente
    const timer = setTimeout(() => setShowSplash(false), 3000); // Oculta el splash tras 3 segundos
    return () => clearTimeout(timer);                        // Limpia el temporizador al desmontar el componente
  }, []);                                                     // [] para que solo se ejecute una vez

  // Mostrar pantalla Splash si showSplash es true
  if (showSplash) {                                           // Si showSplash es verdadero, muestra el splash
    return (
      <ImageBackground
        source={SplashLogo}                           // Imagen que se muestra de fondo
        style={styles.splashContainer}                // Estilo del splash centrado
        resizeMode="cover"                            // Cubre toda la pantalla
      >
        <View style={styles.splashOverlay} />          {/* Capa semitransparente encima */}
        <View style={styles.splashContent}>            {/* Contenedor del logo y texto */}
          <Image source={SplashLogo} style={styles.splashImage} /> {/* Imagen del logo */}
          <Text style={styles.splashText}>Cargando...</Text>       {/* Texto mientras carga */}
        </View>
      </ImageBackground>
    );
  }

  // Función para manejar el registro
  const manejarRegistro = () => {                             // Función que se ejecuta al presionar el botón "Registrarse"
    // Verificar si los campos están vacíos
    if (nombre.trim() === "" || correo.trim() === "") {       // Si el nombre o correo están vacíos
      const mensaje = "Error: Debes completar todos los campos."; // Mensaje de error
      Platform.OS === "web"
        ? window.alert(mensaje)                               // Si está en web, usa window.alert
        : Alert.alert("Error", mensaje);                      // Si está en móvil, usa Alert.alert
      return;                                                 // Detiene la ejecución
    }

    // Verificar si se aceptaron los términos
    if (!aceptaTerminos) {                                    // Si el usuario no activó el switch
      const mensaje = "Error: Debes aceptar los términos y condiciones."; // Mensaje de error
      Platform.OS === "web"
        ? window.alert(mensaje)                               // Alerta en web
        : Alert.alert("Error", mensaje);                      // Alerta en móvil
      return;                                                 // Detiene la ejecución
    }

    // Si todo es correcto, mostrar éxito
    const mensaje = `Nombre: ${nombre}\nCorreo: ${correo}\nRegistro exitoso.`; // Mensaje con los datos ingresados
    Platform.OS === "web"
      ? window.alert(mensaje)                                 // Alerta en web
      : Alert.alert("Registro exitoso", mensaje);             // Alerta en móvil

    // Reiniciar los campos
    setNombre("");                                            // Limpia el campo de nombre
    setCorreo("");                                            // Limpia el campo de correo
    setAceptaTerminos(false);                                 // Reinicia el switch a false
  };

  // Sección principal del formulario
  return (
    <ImageBackground
      source={MainBackground}              // Imagen de fondo principal
      style={styles.background}            // Estilos del fondo
      resizeMode="cover"                   // Escala la imagen
    >
      <View style={styles.container}>      {/* Contenedor del formulario */}
        <Text style={styles.title}>Registro de Usuario</Text> {/* Título principal */}

        <TextInput
          style={styles.input}             // Estilo del campo
          placeholder="Nombre completo"    // Texto guía
          value={nombre}                   // Valor actual del nombre
          onChangeText={setNombre}         // Actualiza estado al escribir
        />

        <TextInput
          style={styles.input}             // Estilo igual que el anterior
          placeholder="Correo electrónico" // Texto guía para correo
          value={correo}                   // Valor actual del correo
          onChangeText={setCorreo}         // Actualiza estado al escribir
          keyboardType="email-address"     // Teclado tipo correo
          autoCapitalize="none"            // No pone mayúsculas automáticas
        />

        <View style={styles.switchContainer}> {/* Contenedor del switch */}
          <Switch
            value={aceptaTerminos}            // Estado del switch
            onValueChange={setAceptaTerminos} // Actualiza el estado al cambiar
          />
          <Text style={styles.switchLabel}>Aceptar términos y condiciones</Text> {/* Texto junto al switch */}
        </View>

        <Button
          title="Registrarse"             // Texto del botón
          onPress={manejarRegistro}       // Llama a la función de registro
          color="#0066cc"                 // Color azul del botón
        />

        <Text style={styles.smallNote}>Usa datos de prueba para ver la alerta.</Text> {/* Nota inferior */}
      </View>
    </ImageBackground>
  );
}

// Estilos
const { width, height } = Dimensions.get("window"); // Obtiene tamaño de pantalla

const styles = StyleSheet.create({
  background: {
    flex: 1,                              // Ocupa todo el espacio disponible
    width,                                // Ancho total de la pantalla
    height,                               // Alto total de la pantalla
    justifyContent: "center",             // Centra el contenido verticalmente
    alignItems: "center",                 // Centra el contenido horizontalmente
  },
  splashContainer: {
    width,                                // Ancho total del splash
    height,                               // Alto total del splash
    justifyContent: "center",             // Centra el contenido verticalmente
    alignItems: "center",                 // Centra el contenido horizontalmente
  },
  splashOverlay: {
    position: "absolute",                 // Capa encima del fondo
    top: 0,                               // Desde arriba
    left: 0,                              // Desde la izquierda
    right: 0,                             // Hasta la derecha
    bottom: 0,                            // Hasta abajo
    backgroundColor: "rgba(0,0,0,0.35)",  // Fondo semitransparente oscuro
  },
  splashContent: {
    justifyContent: "center",             // Centra el logo y texto verticalmente
    alignItems: "center",                 // Centra horizontalmente
  },
  splashImage: {
    width: 140,                           // Ancho del logo
    height: 140,                          // Alto del logo
    borderRadius: 20,                     // Bordes redondeados
    marginBottom: 12,                     // Espacio debajo del logo
  },
  splashText: {
    color: "#ff0000",                     // Texto en rojo
    fontSize: 26,                         // Tamaño del texto
    fontWeight: "bold",                   // Negrita
  },
  container: {
    backgroundColor: "rgba(255,255,255,0.9)", // Fondo blanco semitransparente
    padding: 22,                         // Espaciado interno
    borderRadius: 14,                    // Bordes redondeados
    alignItems: "center",                // Centra los elementos
    width: 320,                          // Ancho fijo del formulario
  },
  title: {
    fontSize: 22,                        // Tamaño del título
    fontWeight: "bold",                  // Negrita
    marginBottom: 16,                    // Espacio debajo
  },
  input: {
    width: "100%",                       // Ancho completo del contenedor
    borderWidth: 1,                      // Borde visible
    borderColor: "#ccc",                 // Color gris del borde
    borderRadius: 10,                    // Bordes redondeados
    padding: 10,                         // Espacio interno
    marginBottom: 12,                    // Espacio entre inputs
    backgroundColor: "#fff",             // Fondo blanco
  },
  switchContainer: {
    flexDirection: "row",                // Elementos en fila
    alignItems: "center",                // Centrado vertical
    marginBottom: 18,                    // Espacio debajo del switch
  },
  switchLabel: {
    marginLeft: 10,                      // Espacio entre switch y texto
    fontSize: 15,                        // Tamaño del texto
    color: "#000",                       // Color negro
  },
  smallNote: {
    marginTop: 10,                       // Espacio arriba
    fontSize: 12,                        // Tamaño pequeño
    color: "#444",                       // Color gris oscuro
  },
});