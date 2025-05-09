import { Crypto } from '../models/Crypto';

// Datos de prueba simulados con campos actualizados según la API real
const mockCryptos: Crypto[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price_usd: '10000',
    percent_change_24h: '1.5',
    market_cap_usd: '1000000',
    csupply: '19720000',
    tsupply: '19720000',
    msupply: '21000000',
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price_usd: '2000',
    percent_change_24h: '2.0',
    market_cap_usd: '500000',
    csupply: '115000000',
    tsupply: '120000000',
    msupply: '',
  },
];

// Función que simula la lógica usada para filtrar las criptomonedas
function filterCryptos(cryptos: Crypto[], query: string) {
  return cryptos.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.symbol.toLowerCase().includes(query.toLowerCase())
  );
}

// Conjunto de pruebas unitarias con Jest
describe('Filtrado de criptomonedas', () => {
  it('Filtra por símbolo', () => {
    const result = filterCryptos(mockCryptos, 'btc');
    expect(result.length).toBe(1);
    expect(result[0].symbol).toBe('BTC');
  });

  it('Filtra por nombre', () => {
    const result = filterCryptos(mockCryptos, 'ethereum');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Ethereum');
  });

  it('No encuentra coincidencias', () => {
    const result = filterCryptos(mockCryptos, 'doge');
    expect(result.length).toBe(0);
  });
});
