import { Text, View } from 'react-native';
import { Headline } from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {
  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
    </View>
  );
};

export default NuevoCliente;
