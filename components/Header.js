import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const Header = ({ title = 'Smart Cornfields' }) => {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<Image source={require('../assets/logo.jpg')} style={styles.logo} />
			</View>

			<Text style={styles.title}>{title}</Text>

			<View style={styles.avatar}>
				<Text style={styles.avatarText}>BF</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 88,
		backgroundColor: colors.primary,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingTop: 18,
	},
	left: {
		width: 44,
		alignItems: 'flex-start',
	},
	logo: {
		width: 40,
		height: 40,
		borderRadius: 8,
	},
	title: {
		flex: 1,
		textAlign: 'center',
		color: '#ffffff',
		fontSize: 18,
		fontWeight: '600',
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: 'rgba(255,255,255,0.18)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatarText: {
		color: '#fff',
		fontWeight: '700',
	},
});

export default Header;

