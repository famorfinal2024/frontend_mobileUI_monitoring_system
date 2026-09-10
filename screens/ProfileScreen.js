import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import ProfileOption from '../components/ProfileOption';
import colors from '../styles/colors';

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileArea}>
          <TouchableOpacity style={styles.backButton} activeOpacity={0.75}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>

          <View style={styles.avatar}>
            <View style={styles.avatarHead} />
            <View style={styles.avatarBody} />
          </View>
          <Text style={styles.name}>Brent Jhon Famor</Text>
          <Text style={styles.location}>Bagocboc, Opol</Text>
        </View>

        <View style={styles.settingsPanel}>
          <Text style={styles.settingsTitle}>Settings</Text>

          <View style={styles.darkModeRow}>
            <View style={styles.moonCircle}>
              <Text style={styles.moon}>◐</Text>
            </View>
            <Text style={styles.rowLabel}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#555555', true: colors.primary }}
              thumbColor="#ffffff"
              ios_backgroundColor="#555555"
            />
          </View>

          <ProfileOption icon="♟" label="Notification" value="On" iconColor="#e889a0" />
          <ProfileOption icon="▣" label="Privacy" iconColor="#e889a0" />
          <ProfileOption icon="♥" label="Security" iconColor="#e889a0" />

          <View style={styles.separator} />

          <ProfileOption icon="●" label="Account" iconColor="#70b8f2" />
          <ProfileOption icon="?" label="Help" iconColor="#70b8f2" />
          <ProfileOption icon="i" label="About" iconColor="#70b8f2" />

          <TouchableOpacity style={styles.signOut} activeOpacity={0.8}>
            <Text style={styles.signOutText}>Sign out</Text>
            <Text style={styles.signOutIcon}>⇥</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#000000',
  },
  profileArea: {
    minHeight: 238,
    backgroundColor: '#2d2d2c',
    alignItems: 'center',
    paddingTop: 58,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 25,
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  backArrow: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '300',
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#dedede',
    borderWidth: 1,
    borderColor: '#111111',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarHead: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#666666',
    marginTop: 15,
  },
  avatarBody: {
    width: 62,
    height: 30,
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    backgroundColor: '#666666',
    marginTop: 7,
  },
  name: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 11,
  },
  location: {
    color: '#dedede',
    fontSize: 12,
    marginTop: 3,
  },
  settingsPanel: {
    flex: 1,
    backgroundColor: '#000000',
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 28,
    marginTop: -1,
  },
  settingsTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  darkModeRow: {
    minHeight: 41,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  moonCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  moon: {
    color: '#000000',
    fontSize: 21,
  },
  rowLabel: {
    color: '#ffffff',
    fontSize: 13,
    flex: 1,
  },
  separator: {
    height: 12,
  },
  signOut: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff0e9',
    borderRadius: 13,
    paddingHorizontal: 11,
    paddingVertical: 5,
    marginTop: 12,
  },
  signOutText: {
    color: '#9a3c32',
    fontSize: 12,
  },
  signOutIcon: {
    color: '#9a3c32',
    fontSize: 17,
    marginLeft: 5,
  },
});

export default ProfileScreen;
