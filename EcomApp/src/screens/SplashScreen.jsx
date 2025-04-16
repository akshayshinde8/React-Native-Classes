import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace('MainApp'); // User is logged in
            } else {
                navigation.replace('Login'); // Not logged in
            }
        });
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/TrendZonIcon.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <ActivityIndicator size="large" color="#E96E6E" style={styles.loader} />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    loader: {
        marginTop: 10,
    },
});