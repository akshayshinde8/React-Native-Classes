import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/headerIcon.png")} style={styles.headerIcon} />
            </View>
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
    }
})