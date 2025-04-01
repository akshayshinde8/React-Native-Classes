import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, SafeAreaView, Dimensions, Image, FlatList, Pressable, } from "react-native";
import { styles } from "./styles";

const App = () => {

    return (
        <View style={styles.parentContainer}>
            <StatusBar style={styles.status} />
            <Text>Hello World</Text>
        </View>
    );
};

export default App;
