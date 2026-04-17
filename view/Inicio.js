import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, FAB, Headline, List } from 'react-native-paper';
import globalStyles from '../styles/global';

const Inicio = ({ navigation }) => {
  const [clientes, guardarClientes] = useState([]);
  const [consultarApi, guardarConsultarApi] = useState(true);

  useEffect(() => {
    console.log('Componente Inicio montado');

    const obtenerClientesApi = async () => {
      try {
        const resultado = await axios.get('http://10.0.2.2:3000/clientes');
        console.log('Clientes obtenidos:', resultado.data);

        guardarClientes(resultado.data);
        guardarConsultarApi(false);
      } catch (error) {
        console.log('ERROR RED:', error.message);
      }
    };

    if (consultarApi) {
      obtenerClientesApi();
    }
  }, [consultarApi]);

  return (
    <View style={globalStyles.contenedor}>
      <Button
        icon="plus-circle"
        onPress={() =>
          navigation.navigate('NuevoCliente', { guardarConsultarApi })
        }
      >
        Nuevo Cliente
      </Button>

      <Headline style={globalStyles.titulo}>
        {clientes.length > 0 ? 'Clientes' : 'No hay clientes'}
      </Headline>

      <FlatList
        keyExtractor={cliente => cliente.id.toString()}
        data={clientes}
        renderItem={({ item }) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
            onPress={() =>
              navigation.navigate('DetallesCliente', {
                item,
                guardarConsultarApi,
              })
            }
          />
        )}
      />

      <FAB
        icon="plus"
        style={globalStyles.fab}
        onPress={() =>
          navigation.navigate('NuevoCliente', { guardarConsultarApi })
        }
      />
    </View>
  );
};

export default Inicio;
