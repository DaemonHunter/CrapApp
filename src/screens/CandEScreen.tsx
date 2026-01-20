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
import { calculateCandEPayout } from '../utils/payouts';
import type { CandENumber } from '../types/betting';
import { SPACING } from '../theme';

const CANDE_NUMBERS = ['2', '3', '11', '12'];

export function CandEScreen() {
  const [betAmount, setBetAmount] = useState('');
  const [numberHit, setNumberHit] = useState('');

  const handleReset = () => {
    setBetAmount('');
    setNumberHit('');
  };

  const payout = calculateCandEPayout(
    numberHit as CandENumber,
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
            numbers={CANDE_NUMBERS}
            selectedNumber={numberHit}
            onSelect={setNumberHit}
          />
        </Card>

        <ResetButton onPress={handleReset} />

        <PayoutDisplay amount={payout} label="C&E Payout" />
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

export default CandEScreen;
