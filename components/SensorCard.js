import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const SensorCard = ({
	title,
	value,
	unit,
	status,
	subtitle,
	accentColor = colors.accentGreen,
}) => {
	return (
		<View style={styles.wrapper}>
			<View style={[styles.accent, { backgroundColor: accentColor }]} />

			<View style={styles.content}>
				<View style={styles.headerRow}>
					<Text style={styles.title}>{title}</Text>
					<View style={[styles.statusPill, status === 'safe' ? styles.safe : styles.warn]}>
						<Text style={styles.statusText}>{status}</Text>
					</View>
				</View>

				<View style={styles.valueRow}>
					<Text style={styles.value}>{value}</Text>
					<View style={styles.unitCol}>
						<Text style={styles.unit}>{unit}</Text>
					</View>
				</View>

				{subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		backgroundColor: colors.card,
		borderRadius: 12,
		overflow: 'hidden',
		marginVertical: 8,
		alignItems: 'center',
	},
	accent: {
		width: 6,
		height: '100%',
	},
	content: {
		padding: 14,
		flex: 1,
	},
	headerRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		color: colors.lightText,
		fontSize: 12,
	},
	statusPill: {
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 16,
		backgroundColor: '#eee',
	},
	safe: { backgroundColor: '#daf7ee' },
	warn: { backgroundColor: '#f6d0c8' },
	statusText: {
		fontSize: 12,
		color: '#333',
	},
	valueRow: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginTop: 6,
	},
	value: {
		color: colors.lightText,
		fontSize: 28,
		fontWeight: '700',
	},
	unitCol: {
		marginLeft: 8,
		paddingBottom: 6,
	},
	unit: {
		color: colors.mutedText,
	},
	subtitle: {
		color: colors.mutedText,
		marginTop: 8,
		fontSize: 12,
	},
});

export default SensorCard;

