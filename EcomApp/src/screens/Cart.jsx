import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import CartCard from '../components/CartCard'
import { CartContext } from '../context/CartContext'


const Cart = () => {
  const { carts, totalPrice, deleteItemFromCart } = useContext(CartContext)
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.imgContainer}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={carts}
        renderItem={({ item }) => (<CartCard item={item} deleteItemFromCart={deleteItemFromCart} />)}
        ListFooterComponent={
          <>
            <View style={styles.priceContainer}>
              <View style={styles.PriceAndTitle}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>${totalPrice}</Text>
              </View>
              <View style={styles.PriceAndTitle}>
                <Text style={styles.text}>Shipping:</Text>
                <Text style={styles.text}>$0.0</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.PriceAndTitle}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text style={[styles.text, { color: "black", fontWeight: "700" }]}>${totalPrice}</Text>
            </View>
          </>
        }
        contentContainerStyle={{ paddingBottom: 10 }}

      />


      <TouchableOpacity style={styles.checkoutContainer}>
        <Text style={styles.btnText}>Checkout</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imgContainer: {
    marginBottom: 10,
  },
  priceContainer: {
    marginTop: 40,
  },
  PriceAndTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: "#757575",
  },
  divider: {
    borderColor: "#C0C0C0",
    borderWidth: 2,
    marginVertical: 10,
  },
  checkoutContainer: {
    backgroundColor: "#E96E6E",
    borderRadius: 10,
    marginVertical: 10,
  },
  btnText: {
    fontSize: 25,
    textAlign: "center",
    padding: 10,
    color: "white"
  },
})