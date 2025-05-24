import { Image, Linking, StyleSheet, Text, View } from 'react-native'
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
        <Text style={styles.lang}>Summary:</Text>
        <RenderHTML tagsStyles={tagStyle} contentWidth={width} source={{ html: movie.summary || "No summary available" }} />
        <View style={[styles.content, { paddingBottom: 20 }]}>
          <Text style={styles.ratings}>Ratings: {movie.rating.average || "N/A"}</Text>
          <Text style={styles.officialSite} onPress={() => Linking.openURL(movie.officialSite)}>Visit Us</Text>
        </View>
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
    marginBottom: 10,
    borderRadius: 12,
  },
  contentContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#444444"
  },
  genre: {
    fontSize: 17,
    fontWeight: "500",
    color: "#444444"
  },
  ratings: {
    fontSize: 17,
    fontWeight: "500",
    color: "#444444"
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lang: {
    fontSize: 17,
    fontWeight: "500",
    color: "#444444",
  },
  runtime: {
    fontSize: 17,
    fontWeight: "500",
    color: "#444444",
  },
  summary: {
    fontSize: 14,
    textAlign: "justify",
    fontWeight: "500",
    color: "#444444",
  },
  officialSite: {
    fontSize: 17,
    fontWeight: "500",
    color: "blue",
    textDecorationLine: "underline"
  }
})

const tagStyle = {
  p: styles.summary,
}