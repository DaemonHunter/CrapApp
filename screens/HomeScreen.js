import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/header';
import { styles } from '../components/styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Header />
      <Text>Welcome to CrapApp!</Text>
    </View>
  );
};