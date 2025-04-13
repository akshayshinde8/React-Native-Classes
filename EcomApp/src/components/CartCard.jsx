import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'


const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsksv7bLZN_QT1cpwRsuJnPOM1OjLM8spaBw&s";

const CartCard = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imgUrl }} style={styles.img} />
            <View style={styles.cardContent}>
                <Text style={styles.imgTitle}>Jeans is Here</Text>
                <Text style={styles.imgPrice}>$45.66</Text>
                <View style={styles.circleSizeContainer}>
                    <View style={styles.circle} />
                    <View style={styles.sizeCircle}>
                        <Text style={styles.sizeText}>L</Text>
                    </View>
                </View>
            </View>
            <FontAwesome6 name={"trash"} size={22} color={"#F68CB5"} />
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
        borderRadius:10
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
        backgroundColor: "#7094C1",
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