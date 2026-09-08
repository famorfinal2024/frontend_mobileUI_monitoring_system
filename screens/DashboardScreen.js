import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SensorCard from '../components/SensorCard';
import TankCard from '../components/TankCard';
import AlertCard from '../components/AlertCard';
import colors from '../styles/colors';

const DashboardScreen = () => {
	// Sample/static values per request
	const ph = { value: 6.1, unit: '', subtitle: 'optimal: 5.5-6.5', status: 'safe' };
	const tds = { value: 520, unit: 'ppm', subtitle: '', status: 'elevated' };
	const turb = { value: 18, unit: 'NTU', subtitle: 'clear', status: 'safe' };
	const tank = { percent: 65, liters: 65 };

	return (
		<SafeAreaView style={styles.safe}>
			<Header />

			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.sectionTitle}>WATER QUALITY</Text>

				<SensorCard
					title="pH level"
					value={ph.value}
					unit={ph.unit}
					subtitle={ph.subtitle}
					status={ph.status}
					accentColor={colors.accentGreen}
				/>

				<SensorCard
					title="TDS"
					value={tds.value}
					unit={tds.unit}
					subtitle={tds.subtitle}
					status={tds.status}
					accentColor={colors.accentOrange}
				/>

				<SensorCard
					title="Turbidity"
					value={turb.value}
					unit={turb.unit}
					subtitle={turb.subtitle}
					status={turb.status}
				/>

				<Text style={[styles.sectionTitle, { marginTop: 18 }]}>TANK</Text>
				<TankCard percent={tank.percent} liters={tank.liters} />

				<AlertCard />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: colors.background },
	container: {
		padding: 16,
	},
	sectionTitle: {
		color: colors.mutedText,
		marginBottom: 8,
		fontSize: 12,
	},
});

export default DashboardScreen;

