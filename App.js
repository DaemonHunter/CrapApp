import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import BoxNumber from './screens/BoxNumber';
import HardWay from './screens/HardWay';
import PassLine from './screens/PassLine';
import Details from './screens/Details';
import CandE from './screens/CandE';
import Header from './components/header';
import styles from './components/styles';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Box Number"
        component={BoxNumber}
        options={{ drawerLabel: 'Box Number' }}
      />
      <Drawer.Screen
        name="Hard Way"
        component={HardWay}
        options={{ drawerLabel: 'Hard Way' }}
      />
      <Drawer.Screen
        name="Pass Line"
        component={PassLine}
        options={{ drawerLabel: 'Pass Line' }}
      />
      <Drawer.Screen
        name="C&E"
        component={CandE}
        options={{ drawerLabel: 'C&E' }}
      />
    </Drawer.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
        },
        headerTitleStyle: {
          alignSelf: 'center',
        },
        header: props => <Header {...props} />,
      }}
    >
      <Stack.Screen
        name="StackHome"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Image
                source={require('./assets/png/logo-no-background.png')}
                style={styles.logo}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitle: 'Details',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
