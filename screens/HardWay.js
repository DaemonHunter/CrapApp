import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/header';

const HardWayPayout = ({ navigation }) => {
  const [betAmount, setBetAmount] = useState('');
  const [numberHit, setNumberHit] = useState('');
  const [payout, setPayout] = useState('');

  const calculatePayout = (betAmount, numberHit) => {
    if (!betAmount || !numberHit) {
      return '';
    }

    let payoutMultiplier = 0;
    if (numberHit === '6' || numberHit === '8') {
      payoutMultiplier = 10;
    } else if (numberHit === '4' || numberHit === '10') {
      payoutMultiplier = 8;
    }

    const payout = parseFloat(betAmount) * payoutMultiplier;
    return payout.toFixed(2);
  };

  const handleCalculate = () => {
    const payout = calculatePayout(betAmount, numberHit);
    setPayout(payout);
  };

  const handleReset = () => {
    setBetAmount('');
    setNumberHit('');
    setPayout('');
  };


  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
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
        <View style={styles.pointContainer}>
          <Text style={styles.label}>Number Hit:</Text>
          <View style={[styles.pointButtonContainer, { flexDirection: 'row' }]}>
            <TouchableOpacity style={[styles.pointButton, numberHit === '4' && styles.pointButtonActive]} onPress={() => setNumberHit('4')}>
              <Text style={styles.pointButtonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pointButton, numberHit === '6' && styles.pointButtonActive]} onPress={() => setNumberHit('6')}>
              <Text style={styles.pointButtonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pointButton, numberHit === '8' && styles.pointButtonActive]} onPress={() => setNumberHit('8')}>
              <Text style={styles.pointButtonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pointButton, numberHit === '10' && styles.pointButtonActive]} onPress={() => setNumberHit('10')}>
              <Text style={styles.pointButtonText}>10</Text>
            </TouchableOpacity>
          </View>
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.buttonText}>Calculate Payout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        {payout !== '' && (
          <Text style={styles.result}>Payout with initial bet: ${payout}</Text>
        )}
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
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  pointContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 10,
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    alignItems: 'center',
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
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginVertical: 10,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
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
    marginHorizontal: 10,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  radioContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  radioSelected: {
    borderColor: 'green',
  },
  radioText: {
    fontSize: 18,
    marginLeft: 10,
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

export default HardWayPayout;