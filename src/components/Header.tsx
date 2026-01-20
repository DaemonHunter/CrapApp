import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES, SPACING } from '../theme';

export function Header() {
  return (
    <LinearGradient
      colors={[COLORS.backgroundSecondary, COLORS.background]}
      style={styles.header}
    >
      <Image
        source={require('../../assets/png/logo-no-background.png')}
        style={styles.logo}
      />
      <View style={styles.goldAccent} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    height: SIZES.header.height,
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    height: SIZES.logo.height,
    resizeMode: 'contain',
    width: SIZES.logo.width,
  },
  goldAccent: {
    position: 'absolute',
    bottom: 0,
    left: SPACING.xl,
    right: SPACING.xl,
    height: 2,
    backgroundColor: COLORS.gold,
    borderRadius: 1,
    opacity: 0.6,
  },
});

export default Header;
