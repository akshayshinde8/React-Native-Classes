import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigators/MyStack';
import MyTabs from './navigators/MyTabs';
import { CartProvider } from './context/CartContext';
import RootNavigator from './navigators/RootNavigator';


const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        {/* <MyTabs /> */}
        <RootNavigator />
      </NavigationContainer>
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({})