import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, SafeAreaView, Dimensions, Image, FlatList, } from "react-native";
import { styles } from "./styles";

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const data = await fetch("https://dummyjson.com/products");
            const productsData = await data.json();
            setProducts(productsData.products);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    const screenWidth = Dimensions.get('window').width;
    const imageWidth = screenWidth / 2 - 40; // Calculate image width based on screen width


    const renderItems = ({ item }) => {
        return (
            <View style={styles.productCard}>
                <Image
                    source={{ uri: item.thumbnail }}
                    style={{ width: imageWidth, aspectRatio: 1, borderRadius: 10, backgroundColor: "#FFF", alignSelf: "center" }}
                />

                <Text style={styles.productTitle}>{item.title}</Text >
                <Text style={styles.productCat}>{item.category}</Text >
                <Text style={styles.productDes}>{item.description}</Text >
                <View style={styles.productRow}>
                    <Text style={styles.productPrice}>${item.price}</Text >
                    <Text style={[styles.productText, item.rating >= 3 ? styles.productRating : styles.productRating1]}>{item.rating}/5</Text >
                </View>
            </View >
        );
    }

    return (
        <View style={styles.parentContainer}>
            <StatusBar style={styles.status} />
            {
                loading ? <View style={styles.loadingView}><Text style={styles.loadingText}>Loading...</Text></View>
                    : products.length > 0
                        ? <FlatList
                            data={products}
                            renderItem={renderItems}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            initialNumToRender={5}
                        />
                        : <View style={styles.loadingView}><Text style={styles.loadingText}>No Products...</Text></View>
            }
        </View>
    );
};

export default App;

