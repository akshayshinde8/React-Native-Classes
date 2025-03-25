import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");


export const backGroundColor = "rgba(255,0,0,0.1)";
export const boxColor = "red";

const getRandomColor = () => (Math.random(255))

export const styles = StyleSheet.create({
    box: {
        height: 100,
        width: "48%",
        backgroundColor: boxColor,
        margin: "1%",
    },
    scrollBox: {
        flex: 1,
        height: 100,
        backgroundColor: boxColor,
        margin: "1%",
    },
    boxText: {
        fontSize: 25,
    },
    button: {
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
    },
    btnPressed: {
        backgroundColor: "red"
    },
    btnReleased: {
        backgroundColor: "white"
    },
    textPressed: {
        fontWeight: "bold",
        color: "#FFF",
    },
    textReleased: {
        fontWeight: "normal",
        color: "#000",
    },
    singleItem: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical:4,
    }
})