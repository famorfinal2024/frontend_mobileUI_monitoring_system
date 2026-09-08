import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const AlertCard = ({ title = 'Caution — check TDS', subtitle = 'Review before mixing' }) => {
	return (
		<View style={styles.container}>
			<View style={styles.leftIcon}>
				<Text style={styles.icon}>⚠️</Text>
			</View>

			<View style={styles.content}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: colors.cream,
		padding: 14,
		borderRadius: 12,
		alignItems: 'center',
		marginVertical: 12,
	},
	leftIcon: {
		marginRight: 12,
	},
	icon: {
		fontSize: 20,
	},
	content: {},
	title: {
		color: '#422d1f',
		fontWeight: '700',
		marginBottom: 4,
	},
	subtitle: {
		color: '#422d1f',
		opacity: 0.8,
	},
});

export default AlertCard;

