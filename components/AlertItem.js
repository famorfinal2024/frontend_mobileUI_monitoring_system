import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const AlertItem = ({ title, time, unread = false }) => {
  return (
    <View style={[styles.card, unread && styles.unreadCard]}>
      <Text style={[styles.title, unread && styles.unreadTitle]}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 11,
    minHeight: 80,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 10,
  },
  unreadCard: {
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  title: {
    color: colors.lightText,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
  },
  unreadTitle: {
    color: '#ffffff',
    fontWeight: '700',
  },
  time: {
    color: colors.lightText,
    fontSize: 10,
    marginTop: 10,
  },
});

export default AlertItem;
