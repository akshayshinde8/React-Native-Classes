import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const Header = ({ isCart }) => {
    const navigation = useNavigation();
    const logout = async () => {
        try {
            await auth().signOut();
            Alert.alert("Success", "You have been logged out successfully.");
            navigation.replace("Login");
        } catch (error) {
            console.error("Logout failed:", error);
            Alert.alert("Error", "Something went wrong during logout. Please try again.");
        }
    };

    const confirmLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Yes", onPress: logout }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home_Stack")}
                style={styles.imageContainer}
            >
                {
                    isCart ? <Ionicons name={"chevron-back"} color={"#E96E6E"} size={25} />
                        : <Image source={require("../assets/TrendZonHeader.png")} style={styles.headerIcon} />
                }
            </TouchableOpacity>
            {isCart && <Text style={styles.myCart}>My Cart</Text>}
            <TouchableOpacity onPress={confirmLogout} style={styles.logoutButton}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    imageContainer: {
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        height: 44,
        width: 44,
        borderRadius: 22
    },
    headerIcon: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    dp: {
        height: 44,
        width: 44,
        borderRadius: 22
    },
    myCart: {
        fontSize: 28,
        color: "black",
    },
    logoutButton: {
        backgroundColor: '#E96E6E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    logoutText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
})