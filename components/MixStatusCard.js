import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const MixStatusCard = ({ suitable = false }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {suitable ? 'Suitable for mixing' : 'Not suitable for mixing'}
      </Text>
      <Text style={styles.subtitle}>
        {suitable ? 'Water quality is within the acceptable range.' : '1 parameter out of range'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cream,
    borderRadius: 13,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 14,
  },
  title: {
    color: '#422d1f',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 3,
  },
  subtitle: {
    color: '#422d1f',
    fontSize: 13,
  },
});

export default MixStatusCard;
