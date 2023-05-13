import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import MainHome from './MainHome'
import Profile from './Profile'
import { Foundation, MaterialIcons, Entypo, Fontisto } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native'

import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Exit from './Exit'
import Comunication from './Comunication'
export default function Tabs({ navigation }) {
  const Tab = createBottomTabNavigator()
  React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true
      };

      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  );


  return (

    <Tab.Navigator
    backBehavior='none'
      screenOptions={{
        tabBarBackground: () => (
          <LinearGradient
            colors={['#A5E5E3', '#62CFCB']}
            style={{ flex: 1, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          />
        ),
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white'
      }}

    >
      <Tab.Screen
        name='HomeTabs'
        component={MainHome}
        options={{
          tabBarIcon: (props) => (
            <Foundation name="home" size={30} color={props.color} />
          )
        }}
      />
      <Tab.Screen
        name='Voice'
        component={Comunication}
        options={{
          tabBarIcon: (props) => (
            <Fontisto name="mic" size={30} color={props.color} />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons name="account-circle" size={30} color={props.color} />
          )
        }}
      />
      <Tab.Screen
        name='Keluar'
        component={Exit}
        options={{
          tabBarIcon: (props) => (
            <Entypo name="log-out" size={30} color={props.color} />
          )
        }}
      />
    </Tab.Navigator>

  )
}

const styles = StyleSheet.create({})