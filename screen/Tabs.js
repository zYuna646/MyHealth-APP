import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import MainHome from './MainHome'

export default function Tabs() {
  const Tab = createBottomTabNavigator()
  return (

    <Tab.Navigator>
      <Tab.Screen 
        name='MainScreen'
        component={MainHome}
      />
    </Tab.Navigator>
  
  )
}

const styles = StyleSheet.create({})