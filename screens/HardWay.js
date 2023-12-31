import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import Header from '../components/header';
import { styles } from '../components/styles';

const HardWayScreen = ({ navigation }) => {
  const [betAmount, setBetAmount] = useState('');
  const [numberHit, setNumberHit] = useState('');
  const [payout, setPayout] = useState('');
  

  const calculatePayout = () => {
    const payoutAmount = parseFloat(betAmount) * getHardWayScreen(numberHit);
    setPayout(payoutAmount.toFixed(2));
    Keyboard.dismiss();
  };

  const handlePress = (number) => {
    setNumberHit(number);
    Keyboard.dismiss();
  }

  const getHardWayScreen = (numberHit, betAmount) => {
  switch (numberHit) {
    case '4':
    case '10':
      return betAmount * (7/1);
    case '6':
    case '8':
      return betAmount * (9/1);
    default:
      return 0;
  }
};


  const handleReset = () => {
    setBetAmount('');
    setNumberHit('');
    setPayout('');
    Keyboard.dismiss();
  };


  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.inputContainer}>
      <TextInput
        textAlign='center'
        placeholder="Enter Bet Amount"
        keyboardType="numeric"
        value={betAmount}
        onChangeText={(value) => setBetAmount(value)}
        style={styles.textInput}
      />
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.label}>Number Hit:</Text>
          <View style={[styles.pointButtonContainer, { flexDirection: 'row' }]}>
            <TouchableOpacity style={[styles.pointButton, numberHit === '4' && styles.pointButtonActive]} onPress={() => handlePress('4')}>
        <Text style={styles.pointButtonText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, numberHit === '6' && styles.pointButtonActive]} onPress={() => handlePress('6')}>
        <Text style={styles.pointButtonText}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, numberHit === '8' && styles.pointButtonActive]} onPress={() => handlePress('8')}>
        <Text style={styles.pointButtonText}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, numberHit === '10' && styles.pointButtonActive]} onPress={() => handlePress('10')}>
        <Text style={styles.pointButtonText}>10</Text>
      </TouchableOpacity>
          </View>
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
          <Text style={styles.payout}>Hard Way Payout: ${Math.floor(getHardWayScreen(numberHit, betAmount))}</Text>
    </View>
  );
};

export default HardWayScreen;