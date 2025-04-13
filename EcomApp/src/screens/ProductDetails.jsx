import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../components/Header'
import { CartContext } from '../context/CartContext'
import { useNavigation, useRoute } from '@react-navigation/native'

const sizes = ["S", "M", "L", "XL"];
const colorsArray = ["#91A1B0", "#B11D1D", "#1F44A3", "#9F632A", "#1D752B", "#000000"];

const ProductDetails = () => {
    const { addToCart } = useContext(CartContext);
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert("Please select a size and color before adding to cart.");
            return;
        }
        const itemToAdd = {
            ...item,
            size: selectedSize,
            color: selectedColor,
        };
        addToCart(itemToAdd);
        navigation.navigate("Cart");
    };

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.headerstyle}>
                <Header />
            </View>
            <ScrollView>
                <Image source={{ uri: item.image }} style={styles.CoverImg} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={[styles.title, styles.price]}>${item.price}</Text>
                </View>
                <Text style={[styles.title, styles.sizeText]}>Size</Text>
                <View style={styles.sizeContainer}>
                    {
                        sizes.map((size, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setSelectedSize(size)}
                                    style={styles.sizeValueContainer}
                                >
                                    <Text style={[
                                        styles.sizeValue,
                                        selectedSize === size && { color: "#E55B5B" },
                                    ]}
                                    >
                                        {size}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <Text style={[styles.title, styles.colorText]}>Color</Text>
                <View style={styles.colorContainer}>
                    {
                        colorsArray.map((color, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setSelectedColor(color)}
                                    style={[
                                        styles.circleBorder,
                                        selectedColor == color && { borderColor: color, borderWidth: 1 }
                                    ]}
                                >
                                    <View style={[styles.circle, { backgroundColor: color }]} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <TouchableOpacity
                    onPress={handleAddToCart}
                    style={styles.btn}
                    // disabled={!selectedSize || !selectedColor}
                >
                    <Text style={styles.btnText}>Add To Cart</Text>
                </TouchableOpacity>
            </ScrollView>

        </LinearGradient>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerstyle: {
        padding: 20,
    },
    CoverImg: {
        width: "100%",
        aspectRatio: 1,
        resizeMode: "contain"
    },
    contentContainer: {
        flexDirection: "row",
        // justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 20,
    },
    title: {
        fontSize: 20,
        color: "#444444",
        fontWeight: "500",
        width: "70%"
    },
    price: {
        color: "#4D4C4C",
        width: "30%",
        textAlign: "right"

    },
    sizeText: {
        marginHorizontal: 20,
    },
    sizeContainer: {
        flexDirection: "row",
        marginVertical: 20,
    },
    sizeValueContainer: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    sizeValue: {
        fontSize: 18,
        fontWeight: "600"
    },
    colorText: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    colorContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    circleBorder: {
        height: 48,
        width: 48,
        borderRadius: 24,
        marginHorizontal: 3,

        alignItems: "center",
        justifyContent: "center",

    },
    circle: {
        height: 36,
        width: 36,
        borderRadius: 18,
    },
    btn: {
        backgroundColor: "#E96E6E",
        padding: 10,
        margin: 10,
        borderRadius: 20,
    },
    btnText: {
        fontSize: 24,
        fontWeight: "600",
        color: "white",
        textAlign: "center"
    }
})