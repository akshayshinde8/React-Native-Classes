import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigators/RootStack';
import MyDrawer from './navigators/MyDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App