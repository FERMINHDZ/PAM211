import { View, Text } from 'react-native';

export default function Detalle() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>
        Detalles Usuario
      </Text>

      <Text style={{ fontSize: 22, color: 'blue' }}>
        Usando Navegacion Stack
      </Text>
  </View>
);
}