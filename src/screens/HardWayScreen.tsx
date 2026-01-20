import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  Header,
  NumberButtonGroup,
  BetInput,
  PayoutDisplay,
  ResetButton,
  Card,
  styles as sharedStyles,
} from '../components';
import { calculateHardWayPayout } from '../utils/payouts';
import type { HardWayNumber } from '../types/betting';
import { SPACING } from '../theme';

const HARD_WAY_NUMBERS = ['4', '6', '8', '10'];

export function HardWayScreen() {
  const [betAmount, setBetAmount] = useState('');
  const [numberHit, setNumberHit] = useState('');

  const handleReset = () => {
    setBetAmount('');
    setNumberHit('');
  };

  const payout = calculateHardWayPayout(
    numberHit as HardWayNumber,
    parseFloat(betAmount) || 0
  );

  return (
    <View style={sharedStyles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Card animate delay={100}>
          <BetInput value={betAmount} onChange={setBetAmount} />
        </Card>

        <Card animate delay={200}>
          <NumberButtonGroup
            numbers={HARD_WAY_NUMBERS}
            selectedNumber={numberHit}
            onSelect={setNumberHit}
          />
        </Card>

        <ResetButton onPress={handleReset} />

        <PayoutDisplay amount={payout} label="Hard Way Payout" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: 'center',
    paddingBottom: SPACING.xxl,
    paddingTop: SPACING.sm,
  },
});

export default HardWayScreen;
