import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Headline, Subheading } from 'react-native-paper';
import globalStyles from '../styles/global';

const DetallesCliente = ({ route }) => {
  console.log('DetallesCliente - Route:', route.params);

  const { nombre, telefono, correo, empresa } = route.params.item;

  const mostrarConfirmacion = () => {
    // console.log('Mostrar confirmación para eliminar cliente');

    Alert.alert(
      '¿Deseas eliminar este cliente?',
      'Un cliente eliminado no se puede recuperar',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sí, Eliminar',
          onPress: () => eliminarContacto(),
        },
      ],
    );
  };

  const eliminarContacto = () => {
    console.log('Cliente eliminado');
  };

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

      <Button
        mode="contained"
        icon="cancel"
        style={styles.boton}
        onPress={() => mostrarConfirmacion()}
      >
        Eliminar Cliente
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18,
  },

  boton: {
    marginTop: 100,
    backgroundColor: 'red',
  },
});

export default DetallesCliente;
