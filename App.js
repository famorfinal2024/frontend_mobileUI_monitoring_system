import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="light" />

      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#222222',
  },
});
