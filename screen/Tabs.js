import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import MainHome from './MainHome'
import Profile from './Profile'
import { Foundation, MaterialIcons, Entypo, Fontisto } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient'
export default function Tabs() {
  const Tab = createBottomTabNavigator()
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarBackground: () => (
          <LinearGradient
            colors={['#A5E5E3', '#62CFCB']}
            style={{ flex: 1 }}
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
        name='Home'
        component={MainHome}
        options={{
          tabBarIcon: (props) => (
            <Foundation name="home" size={30} color={props.color} />
          )
        }}
      />
      <Tab.Screen
        name='Form'
        component={MainHome}
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
        component={MainHome}
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