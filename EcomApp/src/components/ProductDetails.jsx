import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import LinearGradient from 'react-native-linear-gradient'

const ProductDetails = () => {
    const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgKiRBYVWiv0-ypGWwDs8gVsG80s0DvHGwg&s";

    return (

        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.headerstyle}>
                <Header />
            </View>
            <Image source={{ uri: imageUrl }} style={styles.CoverImg} />
            <View style={styles.contentContainer}>
                <Text style={styles.contentContainer}>Title Image</Text>
                <Text style={styles.contentContainer}>Price Image</Text>
            </View>
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
        height: 420
    },
    contentContainer:{

    },
})