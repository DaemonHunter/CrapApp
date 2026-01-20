import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Header, Card, styles as sharedStyles } from '../components';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';

export function HomeScreen() {
  return (
    <View style={sharedStyles.container}>
      <Header />
      <Animated.View
        entering={FadeInDown.delay(200).duration(400).springify()}
        style={styles.content}
      >
        <Card variant="highlighted" style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome to CrapApp!</Text>
          <Text style={styles.welcomeText}>
            Your premium craps payout calculator
          </Text>
        </Card>
        <Card animate delay={300} style={styles.instructionCard}>
          <Text style={styles.instructionTitle}>Get Started</Text>
          <Text style={styles.instructionText}>
            Choose a bet type from the menu to calculate your payouts
          </Text>
        </Card>
        <Card animate delay={400}>
          <Text style={styles.featureTitle}>Available Bets</Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>Box Numbers</Text>
            <Text style={styles.featureItem}>Hard Ways</Text>
            <Text style={styles.featureItem}>Pass Line Odds</Text>
            <Text style={styles.featureItem}>C&E Bets</Text>
          </View>
        </Card>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    paddingTop: SPACING.md,
  },
  welcomeCard: {
    alignItems: 'center',
  },
  welcomeTitle: {
    color: COLORS.gold,
    fontFamily: TYPOGRAPHY.heading.fontFamily,
    fontSize: 28,
    letterSpacing: TYPOGRAPHY.heading.letterSpacing,
    marginBottom: SPACING.sm,
  },
  welcomeText: {
    color: COLORS.textSecondary,
    fontFamily: TYPOGRAPHY.body.fontFamily,
    fontSize: TYPOGRAPHY.body.fontSize,
    textAlign: 'center',
  },
  instructionCard: {
    alignItems: 'center',
  },
  instructionTitle: {
    color: COLORS.text,
    fontFamily: TYPOGRAPHY.label.fontFamily,
    fontSize: TYPOGRAPHY.label.fontSize,
    marginBottom: SPACING.sm,
  },
  instructionText: {
    color: COLORS.textSecondary,
    fontFamily: TYPOGRAPHY.body.fontFamily,
    fontSize: TYPOGRAPHY.body.fontSize,
    textAlign: 'center',
  },
  featureTitle: {
    color: COLORS.text,
    fontFamily: TYPOGRAPHY.label.fontFamily,
    fontSize: TYPOGRAPHY.label.fontSize,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  featureList: {
    alignItems: 'center',
  },
  featureItem: {
    color: COLORS.textSecondary,
    fontFamily: TYPOGRAPHY.body.fontFamily,
    fontSize: TYPOGRAPHY.body.fontSize,
    marginVertical: SPACING.xs,
  },
});

export default HomeScreen;
