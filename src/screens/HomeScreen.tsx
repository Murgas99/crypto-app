import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

// función para obtener las criptomonedas desde API
import { getCryptos } from '../api/coinApi';
import { Crypto } from '../models/Crypto';

// Navegación y tipado de rutas
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

// Componente de presentación de cada cripto
import CryptoCard from '../components/CryptoCard';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);       // Lista completa de criptos
  const [filtered, setFiltered] = useState<Crypto[]>([]);     // Lista filtrada por búsqueda
  const [loading, setLoading] = useState(true);               // Estado de carga
  const [search, setSearch] = useState('');                   

  const navigation = useNavigation<NavigationProp>();         // Hook de navegación

  // ejecuta al cargar la pantalla: obtiene los datos de la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCryptos();
        setCryptos(data);         // Guarda la lista completa
        setFiltered(data);        // Inicialmente muestra todo
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);       
      }
    };
    fetchData();
  }, []);

  // Función que filtra la lista a partir del texto ingresado
  const handleSearch = (text: string) => {
    setSearch(text);
    const filteredData = cryptos.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.symbol.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filteredData);
  };


  const renderItem = ({ item }: { item: Crypto }) => (
    <CryptoCard item={item} onPress={() => navigation.navigate('Detail', { id: item.id })} />
  );

  // Muestra indicador de carga mientras se obtienen los datos
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Buscar cripto"
        value={search}
        onChangeText={handleSearch}
      />

      {/* Lista de criptomon */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

// Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 10,
    borderRadius: 8,
  },
});
