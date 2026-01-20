import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  Header,
  NumberButtonGroup,
  BetTypeSelector,
  BetInput,
  PayoutDisplay,
  ResetButton,
  Card,
  styles as sharedStyles,
} from '../components';
import { calculatePassLinePayout } from '../utils/payouts';
import type { PassBetType, PointNumber } from '../types/betting';
import { SPACING } from '../theme';

const POINT_NUMBERS = ['4', '5', '6', '8', '9', '10'];

const BET_TYPE_OPTIONS = [
  { value: 'Pass', label: 'Pass' },
  { value: 'DONT_Pass', label: 'DONT Pass' },
];

export function PassLineScreen() {
  const [betAmount, setBetAmount] = useState('');
  const [point, setPoint] = useState('');
  const [betType, setBetType] = useState<PassBetType | ''>('');

  const handleReset = () => {
    setBetAmount('');
    setPoint('');
    setBetType('');
  };

  const payout = calculatePassLinePayout(
    betType,
    parseFloat(betAmount) || 0,
    point as PointNumber
  );

  return (
    <View style={sharedStyles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Card animate delay={100}>
          <BetInput
            value={betAmount}
            onChange={setBetAmount}
            placeholder="Enter Odds Bet Amount"
          />
        </Card>

        <Card animate delay={200}>
          <NumberButtonGroup
            numbers={POINT_NUMBERS}
            selectedNumber={point}
            onSelect={setPoint}
          />
        </Card>

        <Card animate delay={300}>
          <BetTypeSelector
            options={BET_TYPE_OPTIONS}
            selectedType={betType}
            onSelect={(type) => setBetType(type as PassBetType)}
          />
        </Card>

        <ResetButton onPress={handleReset} />

        <PayoutDisplay amount={payout} label="Pass Line Odds Payout" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: 'center',
    paddingBottom: SPACING.md,
    paddingTop: SPACING.xs,
  },
});

export default PassLineScreen;
