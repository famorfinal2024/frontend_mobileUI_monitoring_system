import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

const DispenseButton = ({ status, onPress }) => {
  const label = status === 'Dispensing' ? 'Dispensing...' : status === 'Completed' ? 'Dispense Again' : 'Start Dispensing';

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.icon}>{status === 'Dispensing' ? '◌' : '▷'}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderWidth: 2,
    borderColor: colors.lightText,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  icon: {
    color: colors.lightText,
    fontSize: 23,
    marginRight: 10,
  },
  label: {
    color: colors.lightText,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default DispenseButton;
