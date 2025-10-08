//1.imports (zona de imports)aqui estara lo que le iremos agregando a las pantallas 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from 'react';


//2. zona del main o componentes 
export default function App() {
  
    const [contador,setContador]= useState(0);//contador = variable set contador = funcion

  return (

    <View style={styles.container}>

      <Text>contador: {contador}</Text> 
      <Button title='agregar' onPress={()=>setContador(contador + 1)} />

      <Button title='quitar' onPress={()=>setContador(contador - 1)} />
        
        <Button title='reiniciar' onPress={()=>setContador(0)} />

      <StatusBar style="auto" />
    </View>
  );
}

//3. zona de los estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#beeccbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
