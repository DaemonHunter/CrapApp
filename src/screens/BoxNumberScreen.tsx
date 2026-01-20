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
import { calculateBoxNumberPayout } from '../utils/payouts';
import type { BoxBetType, BoxNumber } from '../types/betting';
import { SPACING } from '../theme';

const BOX_NUMBERS = ['4', '5', '6', '8', '9', '10'];

const BET_TYPE_OPTIONS = [
  { value: 'Lay', label: 'Lay' },
  { value: 'Place', label: 'Place' },
  { value: 'Buy', label: 'Buy' },
];

export function BoxNumberScreen() {
  const [betAmount, setBetAmount] = useState('');
  const [boxNumber, setBoxNumber] = useState('');
  const [betType, setBetType] = useState<BoxBetType | ''>('');

  const handleReset = () => {
    setBetAmount('');
    setBoxNumber('');
    setBetType('');
  };

  const payout = calculateBoxNumberPayout(
    betType,
    boxNumber as BoxNumber,
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
            numbers={BOX_NUMBERS}
            selectedNumber={boxNumber}
            onSelect={setBoxNumber}
          />
        </Card>

        <Card animate delay={300}>
          <BetTypeSelector
            options={BET_TYPE_OPTIONS}
            selectedType={betType}
            onSelect={(type) => setBetType(type as BoxBetType)}
          />
        </Card>

        <ResetButton onPress={handleReset} />

        <PayoutDisplay amount={payout} label="Box Number Payout" />
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

export default BoxNumberScreen;
