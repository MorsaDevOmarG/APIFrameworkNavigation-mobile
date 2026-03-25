import { StyleSheet, Text, View } from 'react-native';
import { Headline, TextInput } from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {
  const leerNombre = () => {
    console.log('Leyendo nombre del cliente');
  };

  const leerTelefono = () => {
    console.log('Leyendo teléfono del cliente');
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

      <TextInput
        label="Nombre"
        placeholder="Nombre del cliente"
        onChangeText={() => leerNombre()}
        style={styles.input}
      />

      <TextInput
        label="Teléfono"
        placeholder="Teléfono del cliente"
        onChangeText={() => leerTelefono()}
        style={styles.input}
      />

      <TextInput
        label="Correo"
        placeholder="Correo del cliente"
        onChangeText={() => leerCorreo()}
        style={styles.input}
      />

      <TextInput
        label="Empresa"
        placeholder="Empresa del cliente"
        onChangeText={() => leerEmpresa()}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoCliente;
