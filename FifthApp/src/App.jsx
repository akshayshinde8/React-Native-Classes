import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, SafeAreaView, Dimensions, Image, FlatList, Pressable, } from "react-native";
import { styles } from "./styles";

const App = () => {

    const [cartCount, setCartCount] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [lastPressTime, setlastPressTime] = useState(0);

    const fillHeart = "https://tse2.mm.bing.net/th?id=OIP.gEYHxSyXl3sMNJN4o3_AFAHaGl&pid=Api&P=0&h=180";
    const emptyHeart = "https://tse1.mm.bing.net/th?id=OIP.GQEA_kLrdkQn7XNvKAj1uAHaHa&pid=Api&P=0&h=180";

    const handlePress = () => {
        const curTime = new Date().getTime();
        const timeDiff = curTime - lastPressTime;
        if (timeDiff < 300) {
            setIsFavorite(!isFavorite);
        }
        setlastPressTime(curTime);
    }

    const handleAddToCart = () => {
        setCartCount(cartCount + 1)
    }

    return (

        <View style={styles.parentContainer}>
            <StatusBar style={styles.status} />

            <View style={styles.addToCartBadge}><Text style={styles.addToCartBadgeText}>{cartCount}</Text></View>
            <Pressable
                style={({ pressed }) => [styles.productCard,
                { transform: [{ scale: pressed ? 1.05 : 1 }] },]}
                android_ripple={{ color: 'lightgrey' }}
                onPress={handlePress}
            >
                <View>
                    <Image
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JFyVMUGB2hCmAhFXOdCydqzgsCHd2BAzEA&s" }}
                        style={{ aspectRatio: 1, }}
                        resizeMode="contain"
                    />
                    <Text style={styles.productTitle}>Hill Station</Text>
                    <Text style={styles.productDes}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi voluptates accusamus? Rem culpa libero fuga eaque, dolorem quos temporibus tempore? Unde dicta ratione corporis vero, quia minus veritatis quam!</Text>
                    <View style={{ margin: 6 }}>
                        <View>{
                            isFavorite ? <Image
                                source={{ uri: fillHeart }}
                                style={styles.heartImage}
                                resizeMode="contain"
                            /> : <Image
                                source={{ uri: emptyHeart }}
                                style={styles.heartImage}
                                resizeMode="contain"
                            />
                        }</View>
                        <Text style={styles.productPrice}>$500</Text>
                    </View>
                </View>
                <Pressable style={({ pressed }) => [styles.btn, pressed ? styles.btnPressed : styles.btnReleased]} onPress={handleAddToCart}>
                    <Text style={styles.btnText}>Add To Cart</Text>
                </Pressable>
            </Pressable>
        </View>
    );
};

export default App;
