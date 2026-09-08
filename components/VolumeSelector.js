import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../styles/colors';

const VolumeSelector = ({ options = [5, 10, 15, 20], selectedVolume, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>SELECT VOLUME</Text>
      <View style={styles.options}>
        {options.map((volume) => {
          const selected = volume === selectedVolume;
          return (
            <TouchableOpacity
              key={volume}
              style={[styles.option, selected && styles.selectedOption]}
              onPress={() => onSelect(volume)}
              activeOpacity={0.8}
            >
              <Text style={[styles.optionText, selected && styles.selectedText]}>{volume} L</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: colors.lightText,
    fontSize: 13,
    marginBottom: 11,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    minWidth: 48,
    borderWidth: 2,
    borderColor: colors.lightText,
    borderRadius: 11,
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#075ca5',
    borderColor: '#075ca5',
  },
  optionText: {
    color: colors.lightText,
    fontSize: 16,
    fontWeight: '600',
  },
  selectedText: {
    color: '#ffffff',
  },
});

export default VolumeSelector;
