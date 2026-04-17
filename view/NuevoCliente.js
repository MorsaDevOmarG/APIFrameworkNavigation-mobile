import { StyleSheet, Text, View } from 'react-native';
import {
  Button,
  Headline,
  TextInput,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';
import globalStyles from '../styles/global';
import { useState } from 'react';
import axios from 'axios';

const NuevoCliente = ({ navigation }) => {
  // Campos form
  const [nombre, guardarNombre] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [correo, guardarCorreo] = useState('');
  const [empresa, guardarEmpresa] = useState('');
  const [alerta, guardarAlerta] = useState(false);

  // Almacenar el cliente
  const guardarCliente = async () => {
    // console.log('Cliente guardado:', { nombre, telefono, correo, empresa });

    // Validar
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      // console.log('Todos los campos son obligatorios');

      guardarAlerta(true);

      return;
    }

    // Generar cliente
    const cliente = { nombre, telefono, correo, empresa };
    console.log('Cliente generado:', cliente);

    // Guardar cliente en API
    try {
      // await axios.post('http://localhost:3000/clientes', cliente);
      // await axios.post('http://10.0.2.2:3000/clientes', cliente);

      await axios.post('http://10.0.2.2:3000/clientes', cliente, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log('ERROR RED:', error.message);
    }

    // Redireccionar
    navigation.navigate('Inicio');
    // navigation.goBack();

    // Limpiar el form
    guardarNombre('');
    guardarTelefono('');
    guardarCorreo('');
    guardarEmpresa('');

    console.log('DESPUES DEL POST');
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

      <TextInput
        label="Nombre"
        placeholder="Nombre del cliente"
        value={nombre}
        onChangeText={text => guardarNombre(text)}
        style={styles.input}
      />

      <TextInput
        label="Teléfono"
        placeholder="Teléfono del cliente"
        value={telefono}
        onChangeText={text => guardarTelefono(text)}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <TextInput
        label="Correo"
        placeholder="Correo del cliente"
        value={correo}
        onChangeText={text => guardarCorreo(text)}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        label="Empresa"
        placeholder="Empresa del cliente"
        value={empresa}
        onChangeText={text => guardarEmpresa(text)}
        style={styles.input}
      />

      <Button
        icon="pencil-circle"
        mode="contained"
        onPress={() => guardarCliente()}
      >
        Guardar Cliente
      </Button>

      {/* Alerta de error */}
      <Portal>
        <Dialog visible={alerta} onDismiss={() => guardarAlerta(false)}>
          <Dialog.Title>Error</Dialog.Title>

          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>

          <Dialog.Actions>
            <Button onPress={() => guardarAlerta(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
