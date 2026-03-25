import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { DefaultTheme, PaperProvider, Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './view/Inicio';
import NuevoCliente from './view/NuevoCliente';
import DetallesCliente from './view/DetallesCliente';
import BarraSuperior from './components/ui/Barra';

const Stack = createNativeStackNavigator();

// DEfinir el Tema UI
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774f2',
    accent: '#0655BF',
  },
};
console.log(theme);

const App = () => {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            // Define el componente de la pantalla de inicio
            initialRouteName="Inicio"
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: theme.colors.surface,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
            }}
          >
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={({ navigation, route }) => ({
                headerLeft: props => (
                  <BarraSuperior
                    {...props}
                    navigation={navigation}
                    route={route}
                  />
                ),
              })}
            />

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
      </PaperProvider>
    </>
  );
};

export default App;
