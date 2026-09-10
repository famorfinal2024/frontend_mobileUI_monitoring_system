import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileScreen from './screens/ProfileScreen';
import BottomNavigation from './components/BottomNavigation';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <ProfileScreen />
      </View>

      <BottomNavigation activeTab="Profile" />
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
