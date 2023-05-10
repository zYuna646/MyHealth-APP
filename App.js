import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import Login from './screen/Login';
import MainHome from './screen/MainHome';
import Register from './screen/Register';
import Tabs from './screen/Tabs';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>

      <Stack.Screen 
        name='Home'
        component={Home}
      />
      <Stack.Screen 
        name='Login'
        component={Login}
      />
      <Stack.Screen 
        name='Register'
        component={Register}
      />
      <Stack.Screen 
        name='MainHome'
        component={Tabs}
      />

    </Stack.Navigator>
  );
}

