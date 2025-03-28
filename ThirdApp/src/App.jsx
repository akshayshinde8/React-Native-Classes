import { View, Text, StyleSheet, StatusBar, Pressable } from 'react-native';
import { styles } from './Styles/styles';
import { useState } from 'react';


const App = () => {

    const [message, setmessage] = useState("");

    const handlePressed = () => {
        setmessage("You Clicked Button");
    }

    const handleResetPressed = () => {
        setmessage("");
    }

    return (
        <View style={styles.mainContainer}>
            <StatusBar />

            <View style={styles.headerSec}>
                <Text style={styles.titleText}>Welcome to React Native</Text>
            </View>

            <View style={styles.contentSec}>
                <Text style={styles.contentText}>This is a simple screen.</Text>
                <Text style={[styles.contentText, { fontSize: 20 }]}>It demonstrates styling and core components.</Text>
            </View>

            <View style={styles.btnSec}>

                <Pressable style={({ pressed }) => [
                    styles.btn,
                    { backgroundColor: pressed ? "rgba(0, 0, 255, 0.5)" : "blue" },
                ]} onPress={handlePressed}>
                    <Text style={styles.btnText}> Click Me!</Text>
                </Pressable>

                <Pressable style={styles.btnReset} onPress={handleResetPressed}>
                    <Text style={styles.btnText}> Click to Reset!</Text>
                </Pressable>

            </View>

            <Text style={styles.messageText}>{message}</Text>
        </View>
    )
};

export default App