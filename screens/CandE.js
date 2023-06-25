import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import Header from '../components/header';
import { styles } from '../components/styles';

const CandEScreen = ({ navigation }) => {
  const [betAmount, setBetAmount] = useState('');
  const [numberHit, setNumberHit] = useState('');
  const [payout, setPayout] = useState('');
  

  const calculatePayout = () => {
    const payoutAmount = parseFloat(betAmount) * getCandEScreen(numberHit);
    setPayout(payoutAmount.toFixed(2));
    Keyboard.dismiss();
  };

  const handlePress = (number) => {
    setNumberHit(number);
    Keyboard.dismiss();
  }

  const getCandEScreen = (numberHit, betAmount) => {
  switch (numberHit) {
    case '2':
    case '3':
    case '12':
      return betAmount * (7/1);
    case '11':
      return betAmount * (15/1);
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
            <TouchableOpacity style={[styles.pointButton, numberHit === '2' && styles.pointButtonActive]} onPress={() => handlePress('2')}>
        <Text style={styles.pointButtonText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, numberHit === '3' && styles.pointButtonActive]} onPress={() => handlePress('3')}>
        <Text style={styles.pointButtonText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, numberHit === '11' && styles.pointButtonActive]} onPress={() => handlePress('11')}>
        <Text style={styles.pointButtonText}>11</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pointButton, numberHit === '12' && styles.pointButtonActive]} onPress={() => handlePress('12')}>
        <Text style={styles.pointButtonText}>12</Text>
      </TouchableOpacity>
          </View>
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
          <Text style={styles.payout}>C&E Payout: ${Math.floor(getCandEScreen(numberHit, betAmount))}</Text>
    </View>
  );
};

export default CandEScreen;