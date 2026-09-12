import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="light" />

      <RegisterScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#222222',
  },
});
