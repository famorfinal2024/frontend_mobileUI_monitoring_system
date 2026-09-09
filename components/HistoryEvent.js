import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const HistoryEvent = ({ date, time, volume, status }) => {
  const isSafe = status.toLowerCase() === 'safe';

  return (
    <View style={styles.row}>
      <Text style={styles.dateTime}>{date}, {time}</Text>
      <Text style={styles.volume}>{volume}</Text>
      <View style={[styles.badge, isSafe ? styles.safe : styles.unsafe]}>
        <Text style={[styles.badgeText, !isSafe && styles.unsafeText]}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    minHeight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#555555',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTime: {
    flex: 1,
    color: colors.lightText,
    fontSize: 11,
  },
  volume: {
    width: 42,
    color: colors.lightText,
    fontSize: 11,
    textAlign: 'right',
    marginRight: 10,
  },
  badge: {
    minWidth: 38,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 3,
    alignItems: 'center',
  },
  safe: {
    backgroundColor: '#daf7ee',
  },
  unsafe: {
    backgroundColor: '#f6d0c8',
  },
  badgeText: {
    color: '#1d3028',
    fontSize: 10,
  },
  unsafeText: {
    color: '#7a241f',
  },
});

export default HistoryEvent;
