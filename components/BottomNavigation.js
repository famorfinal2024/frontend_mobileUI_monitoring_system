import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

const Tab = ({ label, active }) => (
  <TouchableOpacity style={styles.tab} activeOpacity={0.7}>
    <Text style={[styles.icon, active && styles.activeIcon]}>🏠</Text>
    <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
  </TouchableOpacity>
);

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <Tab label="Home" active />
      <Tab label="Mix check" />
      <Tab label="Dispense" />
      <Tab label="History" />
      <Tab label="Alert" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: '#1f1f1f',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 18,
    color: colors.mutedText,
  },
  activeIcon: {
    color: colors.primary,
  },
  label: {
    fontSize: 11,
    color: colors.mutedText,
    marginTop: 4,
  },
  activeLabel: {
    color: colors.primary,
    fontWeight: '700',
  },
});

export default BottomNavigation;
