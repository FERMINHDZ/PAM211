import React from 'react';
import { StyleSheet, Text, View, Alert, Platform, ActivityIndicator, Button } from 'react-native'

export default function ActivityScreen() {
  const [cargando, setCargando] = useState(false);
    const carga =()=>{
    setCargando(true);
    setTimeout(()=>{
      setCargando(false);
       if(Platform.OS === 'web'){
          window.alert('Carga completa');
        }
        else{
          Alert.alert('Carga completa');
        }
    }, 3000);
  };

  return (
    <View style={styles.container}>
       <Text style={styles.texto}>Presione para iniciar la carga</Text>
     <View style={styles.botonesContainer}>
           {cargando ? (<ActivityIndicator size='large' color='red'></ActivityIndicator>) : (<Button color='brown' title='Presione para iniciar' onPress={carga}></Button>)}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
