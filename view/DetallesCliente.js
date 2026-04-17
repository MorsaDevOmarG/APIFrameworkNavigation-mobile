import { Text, View } from 'react-native';

const DetallesCliente = ({ route }) => {
  console.log('DetallesCliente - Route:', route.params);
  return (
    <View>
      <Text>Detalles Cliente</Text>
    </View>
  );
};

export default DetallesCliente;
