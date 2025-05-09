// src/components/CryptoCard.tsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Crypto } from '../models/Crypto';

interface Props {
  item: Crypto;
  onPress: () => void;
}

export default function CryptoCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{item.name} ({item.symbol})</Text>
      <Text> ${parseFloat(item.price_usd).toFixed(2)}</Text>
      <Text style={{ color: 'gray' }}>📈 {item.percent_change_24h}% (24h)</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
