import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: "center", }}>
            <Text style={{ alignSelf: "center", fontSize: 30, color: "#000", }}>Login</Text>
            <TextInput style={{
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                color: "#666",
                margin: 10
            }}
                placeholder='Enter Name'
                placeholderTextColor="#666"
            />
            <TextInput style={{
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                color: "#000",
                margin: 10
            }}
                placeholder='Enter Password'
                placeholderTextColor="#666"
            />
            <Button style={{ marginHorizontal: 10 }} onPress={() => navigation.navigate("Main")}>Login</Button>
        </View>
    )
}

export default Login