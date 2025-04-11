import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const Products = ({ item, handleLiked }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ProductDetails", { item })}
            style={styles.container}
        >
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleLiked(item)} style={styles.likeContainer}>
                {
                    item?.isLiked ? <AntDesign name={"heart"} size={25} color={"#E55B5B"} />
                        : <AntDesign name={"hearto"} size={25} color={"#E55B5B"} />
                }
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",

    },
    img: {
        height: 256,
        width: "90%",
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10,
        // borderWidth: 1,
        // borderColor: "black"
    },
    textContainer: {
        paddingHorizontal: 15

    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#444444"
    },
    price: {
        fontSize: 18,
        fontWeight: "600",
        color: "#9C9C9C"
    },
    likeContainer: {
        height: 34,
        width: 34,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
        position: "absolute",
        top: 20,
        right: 20
    }
})