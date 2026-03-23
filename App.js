import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './view/Inicio';
import NuevoCliente from './view/NuevoCliente';
import DetallesCliente from './view/DetallesCliente';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          // Define el componente de la pantalla de inicio
          initialRouteName="Inicio"
        >
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen
            name="NuevoCliente"
            component={NuevoCliente}
            options={{
              title: 'Nuevo Cliente',
            }}
          />
          <Stack.Screen
            name="DetallesCliente"
            component={DetallesCliente}
            options={{
              title: 'Detalles Cliente',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
