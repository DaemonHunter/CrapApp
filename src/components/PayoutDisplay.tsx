import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedNumber } from './AnimatedNumber';
import { Card } from './Card';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';

interface PayoutDisplayProps {
  amount: number;
  label: string;
}

export function PayoutDisplay({ amount, label }: PayoutDisplayProps) {
  return (
    <Card variant="highlighted" style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <AnimatedNumber value={Math.floor(amount)} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  label: {
    color: COLORS.textSecondary,
    fontFamily: TYPOGRAPHY.label.fontFamily,
    fontSize: 14,
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default PayoutDisplay;
