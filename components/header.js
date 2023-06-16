import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { styles } from '../components/styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/png/logo-no-background.png')}
        style={styles.logo}
      />
    </View>
  );
}