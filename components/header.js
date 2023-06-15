import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

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

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
});