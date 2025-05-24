import { Alert, Image, Linking, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

const Details = ({ route }) => {
  const { width } = useWindowDimensions();
  const { movie } = route.params;
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <Image source={{ uri: movie.image?.medium }} style={styles.img} />
        <Text style={styles.title}>Title: {movie.name}</Text>
        <Text style={styles.genre}>Genre: {movie.genres.join(", ")}</Text>
        <View style={styles.content}>
          <Text style={styles.lang}>Language: {movie.language}</Text>
          <Text style={styles.runtime}>Duration: {movie.runtime} Mins</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.ratings}>Ratings: {movie.rating.average || "N/A"}</Text>
          <Text style={styles.officialSite} onPress={() => movie.officialSite ? Linking.openURL(movie.officialSite) : Alert.alert("Official site not available")}>Visit Us</Text>
        </View>
        <Text style={styles.lang}>Summary:</Text>
        <RenderHTML tagsStyles={tagStyle} contentWidth={width} source={{ html: movie.summary || "No summary available" }} />
      </ScrollView>
    </LinearGradient>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "stretch",
    marginBottom: 20,
    borderRadius: 20,
  },
  contentContainer: {
    marginHorizontal: 20,
    marginTop: 10
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },
  genre: {
    fontSize: 18,
    color: "#666",
    marginBottom: 10,
    fontWeight: '600',
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  lang: {
    fontSize: 16,
    color: "#444",
    fontWeight: '500',
  },
  runtime: {
    fontSize: 16,
    color: "#444",
    fontWeight: '500',
  },
  ratings: {
    fontSize: 16,
    color: "#111",
    fontWeight: "600",
  },
  officialSite: {
    fontWeight: "600",
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  summary: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "justify",
    color: "#333",
    marginBottom: 20,
    paddingBottom: 20
  },
})

const tagStyle = {
  p: styles.summary,
}