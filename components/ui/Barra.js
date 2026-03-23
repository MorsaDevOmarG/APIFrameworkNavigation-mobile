import React from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BarraSuperior = ({ navigation, route }) => {
  console.log('Navigation:', navigation);
  console.log('Route:', route);

  const handlePress = () => {
    console.log('Botón presionado Nuevo Cliente');

    navigation.navigate('NuevoCliente');
  };

  return (
    <Button
      icon="plus-circle"
      labelStyle={{ color: 'white', fontWeight: 'bold' }}
      onPress={() => handlePress()}
    >
      Cliente
    </Button>
    // <Icon.Button name="plus-circle" onPress={() => handlePress()}>
    //   Cliente
    // </Icon.Button>
  );
};

export default BarraSuperior;
