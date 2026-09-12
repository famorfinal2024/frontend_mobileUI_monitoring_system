import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../styles/colors';

const LoginInput = ({ label, value, onChangeText, placeholder, secureTextEntry, icon, onIconPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.mutedText}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          autoCorrect={false}
          selectionColor={colors.primary}
        />
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onIconPress}
          disabled={!onIconPress}
          activeOpacity={0.7}
        >
          <Text style={styles.icon}>{icon}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 13,
  },
  label: {
    color: colors.lightText,
    fontSize: 12,
    marginBottom: 7,
  },
  inputWrap: {
    height: 40,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#272727',
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#ffffff',
    fontSize: 13,
    paddingHorizontal: 12,
    paddingVertical: 0,
  },
  iconButton: {
    width: 35,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#c8c8c8',
    fontSize: 18,
  },
});

export default LoginInput;
