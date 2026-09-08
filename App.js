import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DashboardScreen from './screens/DashboardScreen';
import BottomNavigation from './components/BottomNavigation';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <DashboardScreen />
      </View>

      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#222222',
  },
  content: {
    flex: 1,
    paddingBottom: 80, // space for bottom navigation
  },
});
