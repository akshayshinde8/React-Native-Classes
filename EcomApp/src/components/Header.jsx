import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Header = ({ isCart }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home_Stack")}
                style={styles.imageContainer}
            >
                {
                    isCart ? <Ionicons name={"chevron-back"} color={"#E96E6E"} size={25} />
                        : <Image source={require("../assets/headerIcon.png")} style={styles.headerIcon} />
                }
            </TouchableOpacity>
            {isCart && <Text style={styles.myCart}>My Cart</Text>}
            <Image source={require("../assets/dp.png")} style={styles.dp} />
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
        height: 28,
        width: 28,
    },
    dp: {
        height: 44,
        width: 44,
        borderRadius: 22
    },
    myCart: {
        fontSize: 28,
        color: "black",
    }
})