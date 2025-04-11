import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({ item, categorySelected, setcategorySelected }) => {
  return (
    <TouchableOpacity onPress={() => setcategorySelected(item)}    >
      <Text style={[
        styles.categoryText,
        categorySelected === item &&
        {
          color: "#FFFFFF",
          backgroundColor: "#E96E6E",
        },
      ]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#938F8F",
    backgroundColor: "#DFDCDC",
    textAlign: "center",
    borderRadius: 16,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
})