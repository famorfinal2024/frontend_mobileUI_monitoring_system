import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const ParameterStatus = ({ label, value, unit, status, accentColor = colors.accentGreen }) => {
  const isSafe = status === 'Pass' || status === 'Safe' || status === 'OK';

  return (
    <View style={styles.card}>
      <View style={[styles.accent, { backgroundColor: accentColor }]} />
      <Text style={styles.parameter}>{label} • {value}{unit ? ` ${unit}` : ''}</Text>
      <View style={[styles.status, isSafe ? styles.safe : styles.high]}>
        <Text style={styles.statusIcon}>{isSafe ? '✓' : '⚠'}</Text>
        <Text style={styles.statusText}>{isSafe ? (status === 'OK' ? 'OK' : 'Pass') : 'high'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 52,
    backgroundColor: colors.card,
    borderRadius: 11,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 14,
    paddingRight: 10,
  },
  accent: {
    width: 4,
    height: '100%',
    marginRight: 12,
  },
  parameter: {
    flex: 1,
    color: colors.lightText,
    fontSize: 14,
  },
  status: {
    minWidth: 64,
    borderRadius: 15,
    paddingHorizontal: 9,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  safe: { backgroundColor: '#daf7ee' },
  high: { backgroundColor: '#f6eadf' },
  statusIcon: {
    color: '#1d3028',
    fontSize: 13,
    marginRight: 4,
  },
  statusText: {
    color: '#1d3028',
    fontSize: 12,
  },
});

export default ParameterStatus;
