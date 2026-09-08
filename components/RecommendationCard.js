import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const RecommendationCard = ({ children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    minHeight: 110,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 0,
  },
  text: {
    color: colors.lightText,
    fontSize: 14,
    lineHeight: 18,
  },
});

export default RecommendationCard;
