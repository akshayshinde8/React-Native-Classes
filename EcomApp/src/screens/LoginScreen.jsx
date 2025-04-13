import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView, } from 'react-native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password.');
            return;
        }
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('✅ Success', 'User Login Successfully!');
                setEmail('');
                setPassword('');
                navigation.replace("MainApp");
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    Alert.alert('Password is not correct!');
                } else {
                    Alert.alert('Error', "Either Email or Password Wrong");
                }
            });
    };

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <SafeAreaView>
                <Text style={styles.title}>Welcome Back 👋</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    value={email}
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry={secureEntry}
                        onChangeText={setPassword}
                        value={password}
                    />
                    <TouchableOpacity
                        onPress={() => setSecureEntry(prev => !prev)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={secureEntry ? 'eye-off-outline' : 'eye-outline'}
                            size={22}
                            color="#555"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

                <Text style={styles.footer}>
                    Don't have an account?{' '}
                    <Text
                        style={{ color: '#E96E6E', fontWeight: 'bold' }}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        Sign up
                    </Text>
                </Text>

                {/* <Text style={styles.footer}>Don't have an account? Sign up</Text> */}
            </SafeAreaView>
        </LinearGradient>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 40,
        textAlign: 'center',
        color: '#E96E6E',
    },
    input: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 20,
        borderColor: '#DDD',
        borderWidth: 1,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        borderColor: '#DDD',
        borderWidth: 1,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 14,
        color: '#000',
    },
    eyeIcon: {
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#E96E6E',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
    },
    footer: {
        textAlign: 'center',
        marginTop: 20,
        color: '#666',
        fontSize: 14,
    },
});
