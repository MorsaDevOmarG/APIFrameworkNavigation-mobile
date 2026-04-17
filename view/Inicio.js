import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Headline, List } from 'react-native-paper';
import globalStyles from '../styles/global';

const Inicio = () => {
  const [clientes, guardarClientes] = useState([]);

  useEffect(() => {
    console.log('Componente Inicio montado');

    const obtenerClientesApi = async () => {
      try {
        const resultado = await axios.get('http://10.0.2.2:3000/clientes');
        console.log('Clientes obtenidos:', resultado.data);
        guardarClientes(resultado.data);
      } catch (error) {
        console.log('ERROR RED:', error.message);
      }
    };

    obtenerClientesApi();
  }, []);

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>
        {clientes.length > 0 ? 'Clientes' : 'No hay clientes'}
      </Headline>
      <FlatList
        keyExtractor={cliente => cliente.id.toString()}
        data={clientes}
        renderItem={({ item }) => (
          <List.Item title={item.nombre} description={item.empresa} />
        )}
      />
    </View>
  );
};

export default Inicio;
