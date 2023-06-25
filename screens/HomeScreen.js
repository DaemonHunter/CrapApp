import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/header';
import { styles } from '../components/styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Header />
      <Text style={styles.payout}>Welcome to CrapApp!</Text>
      <Text style={styles.payout}> Please choose a bet type from the left menu!</Text>
    </View>
  );
};