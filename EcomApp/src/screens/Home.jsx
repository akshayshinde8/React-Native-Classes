import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from '../components/Category';
import Products from '../components/Products';
import data from '../data/data.json'

const categories = ["Trending Now", "All", "New", "Mens", "Womens"];

const Home = () => {

  const [products, setProducts] = useState(data.products);
  const [categorySelected, setcategorySelected] = useState(null);

  const handleLiked = (item) => {
    const newProducts = () => products.map((prod) => {
      if (prod.id == item.id) {
        return {
          ...prod,
          isLiked: true
        }
      }
      return prod;
    })
    setProducts(newProducts);
  }

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Header />

      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
            {/* Input Container */}
            <Text style={styles.matchText}>Match Your Style</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name="search" size={26} color={"#C0C0C0"} />
              </View>
              <TextInput style={styles.inputInput} placeholder='Search' placeholderTextColor={"#C0C0C0"} />
            </View>
            {/* categories Section */}
            <FlatList
              data={categories}
              renderItem={({ item }) => <Category item={item} categorySelected={categorySelected} setcategorySelected={setcategorySelected} />}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        data={products}
        // keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <Products item={item} handleLiked={handleLiked}/>}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 20,

  },
  matchText: {
    fontSize: 28,
    color: "#000000",
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 15
  },
  inputInput: {
    flex: 1,
    color: "#000000",
  }
})