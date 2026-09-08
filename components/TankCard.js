import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const TankCard = ({ percent = 0, liters = 0 }) => {
	const pct = Math.max(0, Math.min(100, percent));
	return (
		<View style={styles.container}>
			<Text style={styles.label}>TANK</Text>

			<View style={styles.row}>
				<Text style={styles.percent}>{pct}%</Text>

				<View style={styles.progressWrap}>
					<View style={styles.progressBg}>
						<View style={[styles.progressFill, { width: `${pct}%` }]} />
					</View>
				</View>

				<Text style={styles.liters}>{liters}L</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
	},
	label: {
		color: colors.mutedText,
		marginBottom: 6,
		fontSize: 12,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	percent: {
		color: colors.lightText,
		fontSize: 16,
		width: 48,
		fontWeight: '700',
	},
	progressWrap: {
		flex: 1,
		paddingHorizontal: 8,
	},
	progressBg: {
		height: 12,
		backgroundColor: colors.border,
		borderRadius: 8,
		overflow: 'hidden',
	},
	progressFill: {
		height: 12,
		backgroundColor: colors.progressBlue,
	},
	liters: {
		color: colors.mutedText,
		width: 56,
		textAlign: 'right',
	},
});

export default TankCard;

