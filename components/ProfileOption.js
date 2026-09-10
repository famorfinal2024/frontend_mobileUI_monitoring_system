import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileOption = ({ icon, label, iconColor, value, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.75} onPress={onPress}>
      <View style={[styles.iconCircle, { backgroundColor: iconColor }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
      {value ? <Text style={styles.value}>{value}</Text> : null}
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    minHeight: 41,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  icon: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  label: {
    color: '#ffffff',
    fontSize: 13,
    flex: 1,
  },
  value: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    marginRight: 10,
  },
  chevron: {
    color: '#ffffff',
    fontSize: 27,
    fontWeight: '300',
    lineHeight: 27,
  },
});

export default ProfileOption;
