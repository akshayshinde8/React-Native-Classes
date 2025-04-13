import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const CartCard = ({ item, deleteItemFromCart }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={styles.cardContent}>
                <Text style={styles.imgTitle}>{item.title}</Text>
                <Text style={styles.imgPrice}>${item.price}</Text>
                <View style={styles.circleSizeContainer}>
                    <View style={[styles.circle, { backgroundColor: item.color }]} />
                    <View style={styles.sizeCircle}>
                        <Text style={styles.sizeText}>{item.size || "N/A"}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => deleteItemFromCart(item)}>
                <FontAwesome6 name={"trash"} size={22} color={"#F68CB5"} />
            </TouchableOpacity>
        </View>
    )
}

export default CartCard

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: "row",
    },
    img: {
        width: "25%",
        height: 100,
        borderRadius: 10
    },
    cardContent: {
        flex: 1,
        marginHorizontal: 10,
    },
    imgTitle: {
        fontSize: 20,
        color: "#444444",
        fontWeight: "500"
    },
    imgPrice: {
        color: "#797979",
        marginVertical: 10,
    },
    circle: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    circleSizeContainer: {
        flexDirection: "row"
    },
    sizeCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#FFFFFF",
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    sizeText: {
        fontSize: 18,
        fontWeight: "500",
    },
})