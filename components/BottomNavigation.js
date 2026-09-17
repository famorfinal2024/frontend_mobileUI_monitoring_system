import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

const tabs = [
  { name: 'Dashboard', icon: '⌂' },
  { name: 'Mix Check', icon: '⚗' },
  { name: 'Dispense', icon: '▷' },
  { name: 'History', icon: '◴' },
  { name: 'Alerts', icon: '♧' },
];

const BottomNavigation = ({ activeTab = 'Dashboard', onTabPress }) => {
  return (
    <View style={styles.bottomNavigation}>
      {tabs.map((tab) => {
        const active = activeTab === tab.name;

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => onTabPress(tab.name)}
            activeOpacity={0.7}
          >
            <Text style={[styles.icon, active && styles.activeIcon]}>{tab.icon}</Text>
            <Text style={[styles.label, active && styles.activeLabel]}>{tab.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    minHeight: 70,
    backgroundColor: '#1f1f1f',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
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
    textAlign: 'center',
  },
  activeLabel: {
    color: colors.primary,
    fontWeight: '700',
  },
});

export default BottomNavigation;
