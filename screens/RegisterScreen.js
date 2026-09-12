import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RegisterInput from '../components/RegisterInput';
import colors from '../styles/colors';

const RegisterScreen = ({ navigation }) => {
	const [name, setName] = useState('');
	const [gmail, setGmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView
				contentContainerStyle={styles.container}
				keyboardShouldPersistTaps="handled"
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.heading}>Create account</Text>

				<View style={styles.form}>
					<RegisterInput
						label="Name"
						value={name}
						onChangeText={setName}
						placeholder="Your name"
						icon="♙"
					/>

					<RegisterInput
						label="Gmail"
						value={gmail}
						onChangeText={setGmail}
						placeholder="your@gmail.com"
						keyboardType="email-address"
						icon="✉"
					/>

					<RegisterInput
						label="Password"
						value={password}
						onChangeText={setPassword}
						placeholder="Create password"
						secureTextEntry={!showPassword}
						icon={showPassword ? '◉' : '◌'}
						onIconPress={() => setShowPassword((visible) => !visible)}
					/>

					<RegisterInput
						label="Confirm Password"
						value={confirmPassword}
						onChangeText={setConfirmPassword}
						placeholder="Repeat password"
						secureTextEntry={!showConfirmPassword}
						icon={showConfirmPassword ? '◉' : '◌'}
						onIconPress={() => setShowConfirmPassword((visible) => !visible)}
					/>

					<TouchableOpacity
						style={styles.signUpButton}
						activeOpacity={0.8}
						onPress={() => navigation.navigate('Dashboard')}
					>
						<Text style={styles.signUpText}>Sign up</Text>
					</TouchableOpacity>

					<View style={styles.loginRow}>
						<Text style={styles.loginPrompt}>Already registered? </Text>
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={() => navigation.navigate('Login')}
						>
							<Text style={styles.link}>Sign in</Text>
						</TouchableOpacity>
					</View>
				</View>
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
		flexGrow: 1,
		width: '100%',
		maxWidth: 330,
		alignSelf: 'center',
		paddingHorizontal: 20,
		paddingTop: 48,
		paddingBottom: 30,
	},
	heading: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '700',
		textAlign: 'center',
		marginTop: 1,
	},
	form: {
		width: '100%',
		marginTop: 21,
	},
	signUpButton: {
		height: 45,
		backgroundColor: colors.primary,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 17,
	},
	signUpText: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '700',
	},
	loginRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 9,
	},
	loginPrompt: {
		color: colors.lightText,
		fontSize: 12,
	},
	link: {
		color: '#16a9f5',
		fontSize: 12,
	},
});

export default RegisterScreen;

