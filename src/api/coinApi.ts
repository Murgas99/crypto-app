import axios from 'axios';
import { Crypto } from '../models/Crypto';


// URL base de la API de CoinLore
const BASE_URL = 'https://api.coinlore.net/api';

export const getCryptos = async (): Promise<Crypto[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/tickers/`);
     // La respuesta contiene un objeto con la propiedad 'data'
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener criptomonedas:', error);
    throw error;
  }
};
