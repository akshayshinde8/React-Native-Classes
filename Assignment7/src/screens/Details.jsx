import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

const Details = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details</Text>
      <Button onPress={() => navigation.push('Details')}>
        Go to Details
      </Button>
      {/* <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button> */}
      <Button onPress={() => navigation.popToTop()}>
        Go back to first screen in stack
      </Button>
    </View>
  )
}

export default Details