import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import Header from '../components/header';

const BoxNumberPayoutCalculator = () => {
  const [betAmount, setBetAmount] = useState('');
  const [boxNumber, setBoxNumber] = useState('');
  const [payout, setPayout] = useState('');
  const [betType, setBetType] = useState('');

  const calculatePayout = () => {
    const payoutAmount = parseFloat(betAmount) * getBoxNumberPayout(betType, boxNumber);
    setPayout(payoutAmount.toFixed(2));
    Keyboard.dismiss();
  };

  const getBoxNumberPayout = (betType, boxNumber) => {
    switch (betType) {
      case 'Place':
        switch (boxNumber) {
          case '4':
          case '10':
            return betAmount * 1.8;
          case '5':
          case '9':
            return betAmount * 1.4;
          case '6':
          case '8':
            return betAmount * 1.16;
          default:
            return 0;
        }
      case 'Buy':
        switch (boxNumber) {
          case '4':
          case '10':
            return betAmount * 2 * 0.95;
          case '5':
          case '9':
            return betAmount * 1.5 * 0.95;
          case '6':
          case '8':
            return betAmount * 1.2 * 0.95;
          default:
            return 0;
        }
      case 'Lay':
        switch (boxNumber) {
          case '4':
          case '10':
            return betAmount * .5;
          case '5':
          case '9':
            return betAmount * .66;
          case '6':
          case '8':
            return betAmount * .83;
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
          <TouchableOpacity style={[styles.pointButton, boxNumber === '4' && styles.pointButtonActive]} onPress={() => setBoxNumber('4')}>
            <Text style={styles.pointButtonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.pointButton, boxNumber === '5' && styles.pointButtonActive]} onPress={() => setBoxNumber('5')}>
            <Text style={styles.pointButtonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.pointButton, boxNumber === '6' && styles.pointButtonActive]} onPress={() => setBoxNumber('6')}>
            <Text style={styles.pointButtonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.pointButton, boxNumber === '8' && styles.pointButtonActive]} onPress={() => setBoxNumber('8')}>
            <Text style={styles.pointButtonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.pointButton, boxNumber === '9' && styles.pointButtonActive]} onPress={() => setBoxNumber('9')}>
            <Text style={styles.pointButtonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.pointButton, boxNumber === '10' && styles.pointButtonActive]} onPress={() => setBoxNumber('10')}>
            <Text style={styles.pointButtonText}>10</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.betTypeContainer}>
        <Text style={styles.label}>Bet Type:</Text>
        <View style={[styles.betTypeButtonContainer, { flexDirection: 'row' }]}>
          <TouchableOpacity style={[styles.betButton, betType === 'Lay' && styles.pointButtonActive]} onPress={() => setBetType('Lay')}>
            <Text style={styles.pointButtonText}>Lay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.betButton, betType === 'Place' && styles.pointButtonActive]} onPress={() => setBetType('Place')}>
            <Text style={styles.pointButtonText}>Place</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.betButton, betType === 'Buy' && styles.pointButtonActive]} onPress={() => setBetType('Buy')}>
            <Text style={styles.pointButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => {
        setBetAmount('');
        setBoxNumber('');
        setPayout('');
        setBetType('');
      }} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      <Text style={styles.payout}>Box Number Payout: ${Math.floor(getBoxNumberPayout(betType, boxNumber))}</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    alignItems: 'center',
    marginVertical: 30,
    justifyContent: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginVertical: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  payout: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  payoutDescription: {
    fontSize: 16,
    marginVertical: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  payoutAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pointContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  betTypeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  pointButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  betTypeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  pointButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  betButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  pointButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pointButtonActive: {
    backgroundColor: 'green',
  },
});

export default BoxNumberPayoutCalculator;