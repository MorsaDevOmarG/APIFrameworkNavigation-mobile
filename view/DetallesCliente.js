import { StyleSheet, Text, View } from 'react-native';
import { Button, Headline, Subheading } from 'react-native-paper';
import globalStyles from '../styles/global';

const DetallesCliente = ({ route }) => {
  console.log('DetallesCliente - Route:', route.params);

  const { nombre, telefono, correo, empresa } = route.params.item;

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>

      <Text style={styles.texto}>
        Empresa: <Subheading>{empresa}</Subheading>
      </Text>
      <Text style={styles.texto}>
        Teléfono: <Subheading>{telefono}</Subheading>
      </Text>
      <Text style={styles.texto}>
        Correo: <Subheading>{correo}</Subheading>
      </Text>

      <Button>Eliminar Cliente</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18,
  },
});

export default DetallesCliente;
