import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Home = () => {
    let [product, setProducts] = useState([]);

    let fetchData = async () => {
        try {
            let data = await fetch(`https://fakestoreapi.com/products`);
            let data1 = await data.json();
            setProducts(data1)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    let renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View style={styles.texts}>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.title}>Title: {item.title}</Text>
                    <Text style={styles.price}> Price: {item.price}</Text>
                </View>
            </View>
        )
    }

    return (
        <View>
            <TextInput
                style={styles.inp}
                placeholder='Search Here'
                placeholderTextColor={"#444"}
            />
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                data={product}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    inp: {
        padding: 15,
        margin: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#fff",
    },
    img: {
        width: "90%",
        aspectRatio: 1,
        borderRadius: 20,
        margin: 5,
    },
    texts: {
        marginBottom: 5,
    },
    category: {
        color: "#444",
        fontWeight: "500",
        fontSize: 16,
        textTransform: 'uppercase'
    },
    title: {
        color: "#444",
        fontWeight: "500",
        fontSize: 16,
    },
    price: {
        color: "#444",
        fontWeight: "500",
        fontSize: 14,
    },
})