import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

// Define el tipo de parámetros que recibe esta pantalla desde la navegación
type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

// Modelo local para representar los datos detallados de una criptomoneda
interface CryptoDetail {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
  percent_change_24h: string;
  market_cap_usd: string;
  volume24: string;
  csupply: string;
  tsupply: string;
  msupply: string;
}

export default function DetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const { id } = route.params; // Se obtiene el ID desde los parámetros de navegación

  const [crypto, setCrypto] = useState<CryptoDetail | null>(null); // Estado con los datos de la cripto
  const [loading, setLoading] = useState(true); // Estado de carga para el spinner

  // Efecto que se ejecuta al montar el componente para obtener los datos de la API
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`);
        setCrypto(res.data[0]); 
      } catch (error) {
        console.error('Error al cargar detalles:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchDetail();
  }, [id]);


  if (loading || !crypto) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // Renderiza los datos detallados de la criptomoneda
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{crypto.name} ({crypto.symbol})</Text>

      <Text style={styles.info}>
         Precio USD: ${parseFloat(crypto.price_usd).toFixed(2)}
      </Text>

      <Text style={styles.info}>
         Cambio 24h: {crypto.percent_change_24h}%
      </Text>

      <Text style={styles.info}>
         Capitalización: {crypto.market_cap_usd && !isNaN(Number(crypto.market_cap_usd))
          ? `$${Number(crypto.market_cap_usd).toLocaleString()}`
          : 'No disponible'}
      </Text>

      <Text style={styles.info}>
         Volumen 24h: {crypto.volume24 && !isNaN(Number(crypto.volume24))
          ? `$${Number(crypto.volume24).toLocaleString()}`
          : 'No disponible'}
      </Text>

      <Text style={styles.info}>
         Circulación: {crypto.csupply && !isNaN(Number(crypto.csupply))
          ? Number(crypto.csupply).toLocaleString()
          : 'No disponible'}
      </Text>

      <Text style={styles.info}>
         Total: {crypto.tsupply && !isNaN(Number(crypto.tsupply))
          ? Number(crypto.tsupply).toLocaleString()
          : 'No disponible'}
      </Text>

      <Text style={styles.info}>
         Máximo: {crypto.msupply && !isNaN(Number(crypto.msupply))
          ? Number(crypto.msupply).toLocaleString()
          : 'No disponible'}
      </Text>
    </View>
  );
}

// Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
});
