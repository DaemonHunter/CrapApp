import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Header from '../components/header';
//import { styles } from '../components/styles';

const PassLinePayoutCalculatorScreen = () => {
  const [betAmount, setBetAmount] = useState('');
  const [odds, setOdds] = useState('');
  const [point, setPoint] = useState('');
  const [payout, setPayout] = useState('');

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
        </View>
        <View style={styles.inputContainer}>
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
            <Text style={styles.label}>Enter Current Point:</Text>
            <View style={[styles.pointButtonContainer, { flexDirection: 'row' }]}>
              <TouchableOpacity style={[styles.pointButton, point === '4' && styles.pointButtonActive]} onPress={() => setPoint('4')}>
                <Text style={styles.pointButtonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.pointButton, point === '5' && styles.pointButtonActive]} onPress={() => setPoint('5')}>
                <Text style={styles.pointButtonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.pointButton, point === '6' && styles.pointButtonActive]} onPress={() => setPoint('6')}>
                <Text style={styles.pointButtonText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.pointButton, point === '8' && styles.pointButtonActive]} onPress={() => setPoint('8')}>
                <Text style={styles.pointButtonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.pointButton, point === '9' && styles.pointButtonActive]} onPress={() => setPoint('9')}>
                <Text style={styles.pointButtonText}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.pointButton, point === '10' && styles.pointButtonActive]} onPress={() => setPoint('10')}>
                <Text style={styles.pointButtonText}>10</Text>
              </TouchableOpacity>
            </View>
          </View>
        <TouchableOpacity onPress={calculatePayout} style={styles.button}>
          <Text style={styles.buttonText}>Calculate Payout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setBetAmount('');
          setOdds('');
          setPayout('');
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
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: 28,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 28,
    width: '50%',
    alignItems: 'center',
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
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  payoutDescription: {
    fontSize: 16,
    marginVertical: 5,
  },
  payoutAmount: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  pointContainer: {
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


export default PassLinePayoutCalculatorScreen;