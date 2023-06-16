import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Header from '../components/header';
import { styles } from '../components/styles';

const PassLinePayoutCalculatorScreen = () => {
  const [betAmount, setBetAmount] = useState('0');
  const [odds, setOdds] = useState('0');
  const [point, setPoint] = useState('');
  const [payout, setPayout] = useState('0');


   const handlePointPress = (point) => {
    setPoint(point);
    Keyboard.dismiss();
  }

  const calculatePayout = () => {
    let amount = parseFloat(betAmount);
    let oddsNum = parseInt(odds);
    let payoutNum = amount;

    if (point === '4' || point === '10') {
      payoutNum = oddsNum * 2;
    } else if (point === '5' || point === '9') {
      payoutNum = oddsNum * 1.5;
    } else if (point === '6' || point === '8') {
      payoutNum = oddsNum * 1.2;
    }

    setPayout(payoutNum.toFixed(2));
    Keyboard.dismiss();
  };

  const passLinePayout = Math.floor(parseFloat(payout));

  return (
    <View style={styles.container}>
      <Header />
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter Bet Amount:</Text>
          <TextInput
            textAlign='center'
            placeholder="0"
            keyboardType="numeric"
            value={betAmount}
            onChangeText={(value) => setBetAmount(value)}
            style={styles.textInput}
          />
          <Text style={styles.inputLabel}>Enter Odds Bet Amount:</Text>
          <TextInput
            textAlign='center'
            placeholder="0"
            keyboardType="numeric"
            value={odds}
            onChangeText={(value) => setOdds(value)}
            style={styles.textInput}
        />
          <View style={styles.pointContainer}>
            <Text style={styles.label}>Current Point:</Text>
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
        <TouchableOpacity onPress={() => {
          setBetAmount('0');
          setOdds('0');
          setPayout('0');
          setPoint('');
        }} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
        <Text style={styles.payout}>Pass Line Payout: ${betAmount}</Text>
        <Text style={styles.payout}>Pass Line Odds Payout: ${Math.floor(parseFloat(passLinePayout))}</Text>
        <Text style={styles.payout}>Total Payout: ${(passLinePayout + parseFloat(betAmount)).toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default PassLinePayoutCalculatorScreen;