import { View, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';


const Home = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((count) => count + 1)}>Count</Button>
      )
    })
  }, [navigation])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text style={{ fontWeight: "bold" }}>Count: {count}</Text>
      <Button onPress={() => navigation.navigate('Products')}>
        Go to Products
      </Button>
    </View>
  )
}

export default Home