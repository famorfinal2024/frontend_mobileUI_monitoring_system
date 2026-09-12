import React, { useState } from 'react';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import LoginInput from '../components/LoginInput';
import colors from '../styles/colors';

const LoginScreen = () => {
	const [email, setEmail] = useState('farmer@example.com');
	const [password, setPassword] = useState('farmerspassword');
	const [showPassword, setShowPassword] = useState(false);

	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<Image source={require('../assets/logo.jpg')} style={styles.logo} />

				<Text style={styles.heading}>Welcome back</Text>
				<Text style={styles.subtitle}>Sign in to your account</Text>

				<View style={styles.form}>
					<LoginInput
						label="Email"
						value={email}
						onChangeText={setEmail}
						placeholder="farmer@example.com"
						icon="✉"
					/>

					<LoginInput
						label="Password"
						value={password}
						onChangeText={setPassword}
						placeholder="Password"
						secureTextEntry={!showPassword}
						icon={showPassword ? '◉' : '◌'}
						onIconPress={() => setShowPassword((visible) => !visible)}
					/>

					<TouchableOpacity style={styles.forgotButton} activeOpacity={0.7}>
						<Text style={styles.link}>Forgot password?</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.signInButton} activeOpacity={0.8}>
						<Text style={styles.signInText}>Sign in</Text>
					</TouchableOpacity>

					<View style={styles.registerRow}>
						<Text style={styles.registerPrompt}>No account? </Text>
						<TouchableOpacity activeOpacity={0.7}>
							<Text style={styles.link}>Register here</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: colors.background,
	},
	container: {
		flex: 1,
		width: '100%',
		maxWidth: 330,
		alignSelf: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingTop: 78,
	},
	logo: {
		width: 62,
		height: 62,
		resizeMode: 'contain',
		backgroundColor: '#ffffff',
		borderWidth: 1,
		borderColor: '#eeeeee',
	},
	heading: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '700',
		marginTop: 19,
	},
	subtitle: {
		color: colors.lightText,
		fontSize: 13,
		marginTop: 1,
	},
	form: {
		width: '100%',
		marginTop: 20,
	},
	forgotButton: {
		alignSelf: 'flex-end',
		paddingVertical: 7,
	},
	link: {
		color: '#16a9f5',
		fontSize: 12,
	},
	signInButton: {
		height: 45,
		backgroundColor: colors.primary,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 11,
	},
	signInText: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '700',
	},
	registerRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 9,
	},
	registerPrompt: {
		color: colors.lightText,
		fontSize: 12,
	},
});

export default LoginScreen;

