import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import auth from '@react-native-firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import { getApp } from '@react-native-firebase/app';
import LinearGradient from 'react-native-linear-gradient';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureEntry, setSecureEntry] = useState(true); // Toggle password visibility

    const onRegister = () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('⚠️ Required Fields', 'Please enter both email and password.');
            return;
        }
        if (password.length < 6) {
            Alert.alert('🔐 Weak Password', 'Password must be at least 6 characters.');
            return;
        }

        const auth = getAuth(getApp());
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                Alert.alert('✅ Success', 'User account created!');
                setEmail('');
                setPassword('');
                navigation.replace("MainApp");
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('⚠️ Email Taken', 'That email address is already in use!');
                } else if (error.code === 'auth/invalid-email') {
                    Alert.alert('❌ Invalid Email', 'That email address is invalid!');
                } else {
                    Alert.alert('Error', error.message);
                }
            });
    };

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Text style={styles.title}>Create Account</Text>

                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#aaa"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        style={styles.passwordInput}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={secureEntry}
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

                <TouchableOpacity style={styles.button} onPress={onRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <Text style={styles.footer}>
                    Have an account?{' '}
                    <Text
                        style={{ color: '#E96E6E', fontWeight: 'bold' }}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Log In
                    </Text>
                </Text>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#E96E6E',
        marginBottom: 40,
        alignSelf: 'center',
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
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 4,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18,
    },
    footer: {
        textAlign: 'center',
        marginTop: 20,
        color: '#666',
        fontSize: 14,
    },
});
