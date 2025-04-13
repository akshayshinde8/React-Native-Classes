import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from '../components/Category';
import Products from '../components/Products';
import data from '../data/data.json'

const categories = ["All", "Clothing", "FootWear", "Men", "Women"];

const Home = () => {

  const [products, setProducts] = useState(data.products);
  const [categorySelected, setcategorySelected] = useState("All");
  const [refreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter(product => {
    const titleMatch = product.title.toLowerCase().includes(searchText.toLowerCase());

    // Handle 'All'
    if (categorySelected === "All") return titleMatch;

    // Match category or gender
    const categoryMatch = product.category.toLowerCase() === categorySelected.toLowerCase();
    const genderMatch = product.gender.toLowerCase() === categorySelected.toLowerCase();

    return titleMatch && (categoryMatch || genderMatch);
  });

  const handleLiked = (item) => {
    setProducts(prevProducts =>
      prevProducts.map((prod) =>
        prod.id === item.id ? { ...prod, isLiked: !prod.isLiked } : prod
      )
    );
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setSearchText('');
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

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
              <TextInput
                style={styles.inputInput}
                placeholder='Search'
                placeholderTextColor={"#C0C0C0"}
                value={searchText}
                onChangeText={setSearchText}
              />
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
        data={filteredProducts}
        renderItem={({ item, index }) => <Products item={item} handleLiked={handleLiked} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 50 }}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products found 😕</Text>
          </View>
        )}
        refreshing={refreshing}
        onRefresh={handleRefresh}
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
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
})