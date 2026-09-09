import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import AlertItem from '../components/AlertItem';
import colors from '../styles/colors';

const unreadAlerts = [
	{
		title: 'TDS reading elevated at 520 ppm\u2014review before pesticide mixing',
		time: 'Today, 09:14 AM',
		unread: true,
	},
];

const earlierAlerts = [
	{
		title: 'pH returned to safe range (6.1) after tank refill',
		time: 'Yesterday, 4:32 PM',
	},
	{
		title: 'Water level dropped below 20%\u2014immediate refill needed',
		time: 'August 22, 7:51 AM',
	},
	{
		title: 'Turbidity spike 74 NTU\u2014first-flush event, wait before mixing',
		time: 'August 21, 1:10 PM',
	},
	{
		title: 'pH above threshold (6.8)\u2014review before mixing',
		time: 'August 20, 10:05 AM',
	},
];

const AlertsScreen = () => {
	return (
		<SafeAreaView style={styles.safe}>
			<Header title="Alerts" />

			<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
				<Text style={styles.sectionTitle}>UNREAD</Text>
				{unreadAlerts.map((alert) => (
					<AlertItem key={`${alert.title}-${alert.time}`} {...alert} />
				))}

				<Text style={[styles.sectionTitle, styles.earlierTitle]}>EARLIER</Text>
				{earlierAlerts.map((alert) => (
					<AlertItem key={`${alert.title}-${alert.time}`} {...alert} />
				))}
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
		paddingBottom: 100,
	},
	sectionTitle: {
		color: colors.lightText,
		fontSize: 12,
		marginBottom: 10,
	},
	earlierTitle: {
		marginTop: 1,
	},
});

export default AlertsScreen;

