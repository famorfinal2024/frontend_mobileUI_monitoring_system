import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomNavigation from './components/BottomNavigation';
import AlertsScreen from './screens/AlertsScreen';
import DashboardScreen from './screens/DashboardScreen';
import DispenseScreen from './screens/DispenseScreen';
import HistoryScreen from './screens/HistoryScreen';
import LoginScreen from './screens/LoginScreen';
import MixCheckScreen from './screens/MixCheckScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeScreen, setActiveScreen] = useState('Login');
  const [previousScreen, setPreviousScreen] = useState(null);

  const showScreen = (screenName) => {
    setPreviousScreen(activeScreen);
    setActiveScreen(screenName);
  };

  const navigation = {
    navigate: (screenName) => {
      if (screenName === 'MainApp') {
        setIsAuthenticated(true);
        setActiveScreen('Dashboard');
        setPreviousScreen(null);
        return;
      }

      showScreen(screenName);
    },
    replace: (screenName) => {
      if (screenName === 'MainApp') {
        setIsAuthenticated(true);
        setActiveScreen('Dashboard');
        setPreviousScreen(null);
        return;
      }

      setActiveScreen(screenName);
      setPreviousScreen(null);
    },
    goBack: () => {
      if (previousScreen) {
        setActiveScreen(previousScreen);
        setPreviousScreen(null);
      }
    },
  };

  const renderAuthScreen = () => {
    if (activeScreen === 'Register') {
      return <RegisterScreen navigation={navigation} />;
    }

    return <LoginScreen navigation={navigation} />;
  };

  const renderMainScreen = () => {
    const screenProps = { navigation };

    switch (activeScreen) {
      case 'Mix Check':
        return <MixCheckScreen {...screenProps} />;
      case 'Dispense':
        return <DispenseScreen {...screenProps} />;
      case 'History':
        return <HistoryScreen {...screenProps} />;
      case 'Alerts':
        return <AlertsScreen {...screenProps} />;
      case 'Profile':
        return <ProfileScreen {...screenProps} />;
    default:
        return <DashboardScreen {...screenProps} />;
    }
  };

  return (
    <View style={styles.app}>
      <StatusBar style="light" />

      <View style={styles.content}>
        {isAuthenticated ? renderMainScreen() : renderAuthScreen()}
      </View>

      {isAuthenticated && activeScreen !== 'Profile' ? (
        <BottomNavigation activeTab={activeScreen} onTabPress={showScreen} />
      ) : null}
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
  },
});
