import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import Header from '../components/header';
import { styles } from '../components/styles';

const BoxNumberScreen = () => {
  const [betAmount, setBetAmount] = useState('');
  const [boxNumber, setBoxNumber] = useState('');
  const [finalPayout, setFinalPayout] = useState('');
  const [betType, setBetType] = useState('');

  const calculatePayout = () => {
    const payoutAmount = parseFloat(betAmount) * getBoxNumberPayout(betType, boxNumber, betAmount);
    setFinalPayout(payoutAmount.toFixed(2));
    Keyboard.dismiss();
  };

  const handleBoxPress = (number) => {
    setBoxNumber(number);
    Keyboard.dismiss();
  };

  const handleBetTypePress = (type) => {
    setBetType(type);
    Keyboard.dismiss();
  };

  const getBoxNumberPayout = (betType, boxNumber, betAmount) => {
    let payout;
    switch (betType) {
      case 'Place':
        switch (boxNumber) {
          case '4':
          case '10':
            return betAmount * 9/5;
          case '5':
          case '9':
            return betAmount * 7/5;
          case '6':
          case '8':
            return betAmount * 7/6;
          default:
            return 0;
        }
      case 'Buy':
        switch (boxNumber) {
          case '4':
          case '10':
            payout = betAmount * 2;
            return payout - (payout * 0.05);
          case '5':
          case '9':
            payout = betAmount * 3/2;
            return payout - (payout * 0.05);
          case '6':
          case '8':
            payout = betAmount * 6/5;
            return payout - (payout * 0.05);
          default:
            return 0;
        }
      case 'Lay':
        switch (boxNumber) {
          case '4':
          case '10':
            return betAmount * 1/2 * 0.95;
          case '5':
          case '9':
            return betAmount * 2/3 * 0.95;
          case '6':
          case '8':
            return betAmount * 5/6 * 0.95;
          default:
            return 0;
        }
      default:
        return 0;
    }
  };

  return (
  <View style={styles.container}>
    <Header />
    <View style={styles.inputContainer}>
      <TextInput
        textAlign='center'
        placeholder="Enter Bet Amount"
        keyboardType="numeric"
        value={betAmount}
        onChangeText={(value) => setBetAmount(value)}
        style={styles.textInput}
      />
      <View style={styles.pointContainer}>
        <Text style={styles.label}>Number Hit:</Text>
        <View style={[styles.pointButtonContainer, { flexDirection: 'row' }]}>
          <TouchableOpacity style={[styles.pointButton, boxNumber === '4' && styles.pointButtonActive]} onPress={() => handleBoxPress('4')}>
        <Text style={styles.pointButtonText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, boxNumber === '5' && styles.pointButtonActive]} onPress={() => handleBoxPress('5')}>
        <Text style={styles.pointButtonText}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, boxNumber === '6' && styles.pointButtonActive]} onPress={() => handleBoxPress('6')}>
        <Text style={styles.pointButtonText}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, boxNumber === '8' && styles.pointButtonActive]} onPress={() => handleBoxPress('8')}>
        <Text style={styles.pointButtonText}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, boxNumber === '9' && styles.pointButtonActive]} onPress={() => handleBoxPress('9')}>
        <Text style={styles.pointButtonText}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, boxNumber === '10' && styles.pointButtonActive]} onPress={() => handleBoxPress('10')}>
        <Text style={styles.pointButtonText}>10</Text>
      </TouchableOpacity>
        </View>
      </View>
      <View style={styles.betTypeContainer}>
        <Text style={styles.label}>Bet Type:</Text>
        <View style={[styles.betTypeButtonContainer, { flexDirection: 'row' }]}>
          <TouchableOpacity style={[styles.betButton, betType === 'Lay' && styles.pointButtonActive]} onPress={() => handleBetTypePress('Lay')}>
          <Text style={styles.pointButtonText}>Lay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.betButton, betType === 'Place' && styles.pointButtonActive]} onPress={() => handleBetTypePress('Place')}>
          <Text style={styles.pointButtonText}>Place</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.betButton, betType === 'Buy' && styles.pointButtonActive]} onPress={() => handleBetTypePress('Buy')}>
          <Text style={styles.pointButtonText}>Buy</Text>
        </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => {
        setBetAmount('');
        setBoxNumber('');
        setFinalPayout('');
        setBetType('');
        Keyboard.dismiss();
      }} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      <Text style={styles.payout}>Box Number Payout: ${Math.floor(getBoxNumberPayout(betType, boxNumber, betAmount))}</Text>
    </View>
  </View>
  );
};

export default BoxNumberScreen;