import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import DispenseStatusCard from '../components/DispenseStatusCard';
import VolumeSelector from '../components/VolumeSelector';
import DispenseButton from '../components/DispenseButton';
import colors from '../styles/colors';

const DispenseScreen = () => {
  const [selectedVolume, setSelectedVolume] = useState(10);
  const [status, setStatus] = useState('Ready to dispense');

  useEffect(() => {
    if (status !== 'Dispensing') {
      return undefined;
    }

    const timer = setTimeout(() => setStatus('Completed'), 1800);
    return () => clearTimeout(timer);
  }, [status]);

  const handleDispense = () => {
    setStatus(status === 'Completed' ? 'Ready to dispense' : 'Dispensing');
  };

  const buttonStatus = status === 'Ready to dispense' ? 'Ready' : status;

  return (
    <SafeAreaView style={styles.safe}>
      <Header title="Dispense water" />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>MANUAL DISPENSE</Text>
        <DispenseStatusCard tankLevel={65} availableLiters={65} />

        <View style={styles.dispensePanel}>
          <VolumeSelector
            selectedVolume={selectedVolume}
            onSelect={(volume) => {
              setSelectedVolume(volume);
              setStatus('Ready to dispense');
            }}
          />

          <Text style={styles.selectedVolume}>{selectedVolume} L</Text>
          <Text style={styles.estimate}>Est. time: ~ {Math.max(1, Math.round(selectedVolume / 2.5))} min</Text>
        </View>

        <DispenseButton status={buttonStatus} onPress={handleDispense} />
        <Text style={styles.status}>{status}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 16,
    paddingBottom: 96,
  },
  sectionTitle: {
    color: colors.mutedText,
    fontSize: 13,
    marginBottom: 10,
  },
  dispensePanel: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    minHeight: 230,
  },
  selectedVolume: {
    color: colors.lightText,
    fontSize: 38,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 4,
  },
  estimate: {
    color: colors.lightText,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 18,
  },
  status: {
    color: colors.mutedText,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 12,
  },
});

export default DispenseScreen;
