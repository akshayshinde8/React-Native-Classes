import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const showJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      const data = await res.json();
      const newJobs = data.results || [];
      setJobs(prevJobs => [...prevJobs, ...newJobs]);
      setPage(prev => prev + 1);
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
    setLoading(false)
  }

  useEffect(() => {
    showJobs();
  }, [])

  const renderItem = ({ item }) => {
    const datails = item.primary_details || {};
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title ? item.title : "No Title Provided"}</Text>
        <Text>Location: {datails.Place ? datails.Place : "No Location Provided"}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Maintitle}> All Jobs Informations</Text>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        onEndReached={showJobs}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading &&
          <View>
            <ActivityIndicator size={"large"} color={"#FFF"} />
          </View>
        }
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#ffff",
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  title: {
    fontWeight: "bold"
  },
  Maintitle: {
    fontSize: 22,
    color: "white",
    textAlign: "center"
  }
})