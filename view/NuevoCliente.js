import { StyleSheet, Text, View } from 'react-native';
import { Headline, TextInput } from 'react-native-paper';
import globalStyles from '../styles/global';
import { useState } from 'react';

const NuevoCliente = () => {
  // Campos form
  const [nombre, guardarNombre] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [correo, guardarCorreo] = useState('');
  const [empresa, guardarEmpresa] = useState('');

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
      />

      <TextInput
        label="Correo"
        placeholder="Correo del cliente"
        value={correo}
        onChangeText={text => guardarCorreo(text)}
        style={styles.input}
      />

      <TextInput
        label="Empresa"
        placeholder="Empresa del cliente"
        value={empresa}
        onChangeText={text => guardarEmpresa(text)}
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
