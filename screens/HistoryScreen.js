import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import HistoryEvent from '../components/HistoryEvent';
import colors from '../styles/colors';

const events = [
  { date: 'May 24', time: '09:15 AM', volume: '8.5 L', status: 'safe' },
  { date: 'May 23', time: '11:15 AM', volume: '10 L', status: 'safe' },
  { date: 'May 22', time: '10:30 AM', volume: '6 L', status: 'unsafe' },
  { date: 'May 21', time: '08:20 AM', volume: '9.5 L', status: 'safe' },
  { date: 'May 20', time: '10:05 PM', volume: '7.8 L', status: 'safe' },
];

const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Header title="Usage history" />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.total}>THIS WEEK&nbsp; 41.5 L TOTAL</Text>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Safe mixes</Text>
            <Text style={styles.summaryValue}>4 / 5</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Avg pH</Text>
            <Text style={styles.summaryValue}>6.0</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>EVENT LOG</Text>
        <View style={styles.eventList}>
          {events.map((event) => (
            <HistoryEvent key={`${event.date}-${event.time}`} {...event} />
          ))}
        </View>
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
  total: {
    color: colors.lightText,
    fontSize: 11,
    marginBottom: 7,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 11,
    paddingHorizontal: 11,
    paddingVertical: 9,
    minHeight: 58,
  },
  summaryLabel: {
    color: colors.lightText,
    fontSize: 11,
    marginBottom: 4,
  },
  summaryValue: {
    color: colors.lightText,
    fontSize: 18,
    fontWeight: '600',
  },
  sectionTitle: {
    color: colors.lightText,
    fontSize: 12,
    marginBottom: 8,
  },
  eventList: {
    backgroundColor: colors.card,
    borderRadius: 11,
    paddingHorizontal: 11,
    paddingVertical: 3,
  },
});

export default HistoryScreen;
