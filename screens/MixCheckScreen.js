import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import MixStatusCard from '../components/MixStatusCard';
import ParameterStatus from '../components/ParameterStatus';
import RecommendationCard from '../components/RecommendationCard';
import colors from '../styles/colors';

const MixCheckScreen = () => {
  const [checkKey, setCheckKey] = useState(0);

  return (
    <SafeAreaView style={styles.safe}>
      <Header title="Mixing Check" />

      <ScrollView
        key={checkKey}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <MixStatusCard />

        <Text style={styles.sectionTitle}>PARAMETER CHECK</Text>
        <ParameterStatus label="pH" value="6.1" status="Pass" />
        <ParameterStatus label="TDS" value="520" unit="ppm" status="High" accentColor={colors.accentOrange} />
        <ParameterStatus label="Turbidity" value="18" unit="NTU" status="Pass" />
        <ParameterStatus label="Water level" value="67%" status="OK" />

        <Text style={[styles.sectionTitle, styles.recommendationTitle]}>RECOMMENDATION</Text>
        <RecommendationCard>
          TDS is elevated. Water may contain dissolved solids that reduce pesticide
          effectiveness. Consider replacing with fresh rainwater.
        </RecommendationCard>

        <Text style={styles.checkButton} onPress={() => setCheckKey((value) => value + 1)}>
          Check again
        </Text>
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
    marginBottom: 12,
  },
  recommendationTitle: {
    marginTop: 2,
    marginBottom: 12,
  },
  checkButton: {
    alignSelf: 'center',
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 16,
    padding: 8,
  },
});

export default MixCheckScreen;
