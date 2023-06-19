import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Header from '../components/header';
import { styles } from '../components/styles';

const PassLineScreen = () => {
  const [betAmount, setBetAmount] = useState('');
  const [odds, setOdds] = useState('');
  const [point, setPoint] = useState('');
  const [betType, setBetType] = useState('');

  const handleBetTypePress = (type) => {
    setBetType(type);
    Keyboard.dismiss();
  };

  const handlePointPress = (point) => {
    setPoint(point);
    Keyboard.dismiss();
  };

  const getPassPayout = (betType, betAmount, point) => {
    let payout;
    switch (betType) {
      case 'DONT_Pass':
        switch (point) {
          case '4':
          case '10':
            return betAmount * (9/5);
          case '5':
          case '9':
            return betAmount * (7/5);
          case '6':
          case '8':
            return betAmount * (7/6);
          default:
            return 0;
        }
      case 'Pass':
        switch (point) {
          case '4':
          case '10':
            payout = betAmount * (2/1);
            return payout;
          case '5':
          case '9':
            payout = betAmount * (3/2);
            return payout;
          case '6':
          case '8':
            payout = betAmount * (6/5);
            return payout;
          default:
            return 0;
        }
      default:
        return 0;
    }
  };

  // You need to calculate the payout and check if it's a number here, before the return statement
  let payoutValue = getPassPayout(betType, parseFloat(betAmount), point);
  if (isNaN(payoutValue)) payoutValue = 0;  // If it's not a number, set it to 0

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          textAlign='center'
          placeholder="Enter Odds Bet Amount"
          keyboardType="numeric"
          value={betAmount}
          onChangeText={(value) => setBetAmount(value)}
          style={styles.textInput}
        />
        <View style={styles.pointContainer}>
          <Text style={styles.label}>Number Hit:</Text>
          <View style={[styles.pointButtonContainer, { flexDirection: 'row' }]}>
            <TouchableOpacity style={[styles.pointButton, point === '4' && styles.pointButtonActive]} onPress={() => handlePointPress('4')}>
              <Text style={styles.pointButtonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pointButton, point === '5' && styles.pointButtonActive]} onPress={() => handlePointPress('5')}>
              <Text style={styles.pointButtonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pointButton, point === '6' && styles.pointButtonActive]} onPress={() => handlePointPress('6')}>
              <Text style={styles.pointButtonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pointButton, point === '8' && styles.pointButtonActive]} onPress={() => handlePointPress('8')}>
              <Text style={styles.pointButtonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pointButton, point === '9' && styles.pointButtonActive]} onPress={() => handlePointPress('9')}>
              <Text style={styles.pointButtonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pointButton, point === '10' && styles.pointButtonActive]} onPress={() => handlePointPress('10')}>
              <Text style={styles.pointButtonText}>10</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.betTypeContainer}>
          <Text style={styles.label}>Bet Type:</Text>
          <View style={[styles.betTypeButtonContainer, { flexDirection: 'row' }]}>
            <TouchableOpacity style={[styles.betButton, betType === 'Pass' && styles.pointButtonActive]} onPress={() => handleBetTypePress('Pass')}>
              <Text style={styles.pointButtonText}>Pass</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.betButton, betType === 'DONT_Pass' && styles.pointButtonActive]} onPress={() => handleBetTypePress('DONT_Pass')}>
              <Text style={styles.pointButtonText}>DONT Pass</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => {
          setBetAmount('');
          setBetType('');
          setOdds('');
          setPoint('');
          Keyboard.dismiss();
        }} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>

        {/* Here you use the payoutValue variable that you have calculated above */}
        <Text style={styles.payout}>Pass Line Odds Payout: ${Math.floor(payoutValue)}</Text>
      </View>
    </View>
  );
};

export default PassLineScreen;
