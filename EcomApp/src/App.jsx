import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigators/MyStack';
import MyTabs from './navigators/MyTabs';
import { CartProvider } from './context/CartContext';


const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({})