import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './context/CartContext';
import RootNavigator from './navigators/RootNavigator';


const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({})