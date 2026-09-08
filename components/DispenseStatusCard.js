import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const DispenseStatusCard = ({ tankLevel = 65, availableLiters = 65 }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.label}>TANK LEVEL</Text>
        <Text style={styles.level}>{tankLevel}%</Text>
      </View>
      <View style={styles.availableBlock}>
        <Text style={styles.label}>AVAILABLE</Text>
        <Text style={styles.available}>{availableLiters} L</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  availableBlock: {
    alignItems: 'flex-end',
  },
  label: {
    color: colors.mutedText,
    fontSize: 11,
    letterSpacing: 0.4,
  },
  level: {
    color: colors.lightText,
    fontSize: 25,
    fontWeight: '700',
    marginTop: 3,
  },
  available: {
    color: colors.lightText,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 5,
  },
});

export default DispenseStatusCard;
