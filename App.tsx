import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  useFonts,
  Oswald_500Medium,
  Oswald_700Bold,
} from '@expo-google-fonts/oswald';
import {
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';
import {
  HomeScreen,
  BoxNumberScreen,
  HardWayScreen,
  PassLineScreen,
  CandEScreen,
} from './src/screens';
import type { RootDrawerParamList } from './src/types/navigation';
import { COLORS } from './src/theme';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const CasinoDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: COLORS.gold,
    background: COLORS.background,
    card: COLORS.backgroundSecondary,
    text: COLORS.text,
    border: COLORS.border,
    notification: COLORS.gold,
  },
};

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.backgroundSecondary,
        },
        headerTintColor: COLORS.gold,
        headerTitleStyle: {
          fontFamily: 'Oswald_700Bold',
          fontSize: 20,
          letterSpacing: 1,
        },
        drawerStyle: {
          backgroundColor: COLORS.backgroundSecondary,
        },
        drawerActiveTintColor: COLORS.gold,
        drawerInactiveTintColor: COLORS.textSecondary,
        drawerActiveBackgroundColor: COLORS.backgroundCard,
        drawerLabelStyle: {
          fontFamily: 'Roboto_500Medium',
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Box Number"
        component={BoxNumberScreen}
        options={{ drawerLabel: 'Box Number' }}
      />
      <Drawer.Screen
        name="Hard Way"
        component={HardWayScreen}
        options={{ drawerLabel: 'Hard Way' }}
      />
      <Drawer.Screen
        name="Pass Line"
        component={PassLineScreen}
        options={{ drawerLabel: 'Pass Line' }}
      />
      <Drawer.Screen
        name="C&E"
        component={CandEScreen}
        options={{ drawerLabel: 'C&E' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_500Medium,
    Oswald_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.gold} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={CasinoDarkTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
});
