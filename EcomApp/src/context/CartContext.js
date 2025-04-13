import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        loadCartItems();
    }, [])

    const loadCartItems = async () => {
        try {
            let carts = await AsyncStorage.getItem("carts");
            carts = carts ? JSON.parse(carts) : [];
            setCarts(carts);
            totalSum(carts);
        } catch (error) {
            console.error("Failed to load cart items:", error);
        }

    };

    const addToCart = async (item) => {
        try {
            const itemExist = carts.findIndex((cart) => cart.id === item.id);
            if (itemExist === -1) {
                const newCartItems = [...carts, { ...item }];
                await AsyncStorage.setItem("carts", JSON.stringify(newCartItems));
                setCarts(newCartItems);
                totalSum(newCartItems);
            }
        } catch (error) {
            console.error("Failed to add item to cart:", error);
        }

    };

    const deleteItemFromCart = async (item) => {
        try {
            const newItems = carts.filter((cart) => cart.id != item.id);
            await AsyncStorage.setItem("carts", JSON.stringify(newItems));
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