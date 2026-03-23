import React from 'react';
import { Button } from 'react-native-paper';

const BarraSuperior = ({ navigation, route }) => {
  console.log('Navigation:', navigation);
  console.log('Route:', route);

  const handlePress = () => {
    console.log('Botón presionado Nuevo Cliente');

    navigation.navigate('NuevoCliente');
  };

  return (
    <Button
      labelStyle={{ color: 'white', fontWeight: 'bold' }}
      onPress={() => handlePress()}
    >
      Cliente
    </Button>
  );
};

export default BarraSuperior;
