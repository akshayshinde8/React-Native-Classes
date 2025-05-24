import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [filterdMovies, setFilterdMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  let fetchData = async () => {
    setLoading(true);
    try {
      let res = await fetch("https://api.tvmaze.com/shows");
      let data = await res.json();
      setMovies(data);
      setFilterdMovies(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = movies.filter((movie) =>
      movie.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilterdMovies(filtered);
  }

  const handleRefresh = () => {
    setRefreshing(true);
    setSearch("");
    fetchData();
  }

  let renderItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Details", { movie: item })} style={styles.container}>
        <Image source={{ uri: item.image?.medium }} style={styles.img} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.genre}>Genre: {item.genres.join(", ")}</Text>
          <Text style={styles.ratings}>Ratings: {item.rating?.average ?? "N/A"}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" color="blue" />;
  }

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} >
      <TextInput
        value={search}
        onChangeText={handleSearch}
        placeholder='Search Movies'
        placeholderTextColor={"black"}
        style={styles.inputField}
      />
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        data={filterdMovies}
        renderItem={renderItems}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 100, }}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListEmptyComponent={() => (
          <View style={styles.emptycon}>
            <Text style={styles.emptytext}>No Movies Found...</Text>
          </View>
        )}
      />
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    position: "relative",
    // borderWidth: 1,
  },
  inputField: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    margin: 12,
    borderColor: '#ccc',
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333'
  },
  img: {
    width: "90%",
    aspectRatio: 1,
    resizeMode: "stretch",
    // height: 256,
    borderRadius: 20,
    marginVertical: 10,
    marginLeft: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },
  genre: {
    fontSize: 14,
    color: "#666",
  },
  ratings: {
    fontSize: 14,
    color: "#444",
  },
  emptycon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptytext: {
    fontSize: 20,
    color: "#999"
  },
})