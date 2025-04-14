import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            if (user) {
                loadCartItems(user.uid);
            }
        });
        return () => unsubscribe(); // clean up listener
    }, []);

    const loadCartItems = async (uid) => {
        try {
            const key = `carts_${uid}`;
            let carts = await AsyncStorage.getItem(key);
            carts = carts ? JSON.parse(carts) : [];
            setCarts(carts);
            totalSum(carts);
        } catch (error) {
            console.error("Failed to load cart items:", error);
        }
    };

    const addToCart = async (item) => {
        try {
            const user = auth().currentUser;
            if (!user) return;

            const key = `carts_${user.uid}`;
            const itemExist = carts.findIndex((cart) => cart.id === item.id);
            if (itemExist === -1) {
                const newCartItems = [...carts, { ...item }];
                await AsyncStorage.setItem(key, JSON.stringify(newCartItems));
                setCarts(newCartItems);
                totalSum(newCartItems);
            }
        } catch (error) {
            console.error("Failed to add item to cart:", error);
        }
    };

    const deleteItemFromCart = async (item) => {
        try {
            const user = auth().currentUser;
            if (!user) return;
            const key = `carts_${user.uid}`;
            const newItems = carts.filter((cart) => cart.id != item.id);
            await AsyncStorage.setItem(key, JSON.stringify(newItems));
            setCarts(newItems);
            totalSum(newItems);
        } catch (error) {
            console.error("Failed to delete item from cart:", error);
        }
    };

    const totalSum = (carts) => {
        const totalSum = carts.reduce((amount, item) => amount + Number(item.price || 0), 0);
        setTotalPrice(totalSum);
    };

    const value = {
        carts,
        addToCart,
        totalPrice,
        deleteItemFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};