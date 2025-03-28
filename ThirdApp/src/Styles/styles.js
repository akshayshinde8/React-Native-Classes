import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    headerSec: {
        backgroundColor: "lightblue",
        padding: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    contentSec: {
        backgroundColor: "white",
        padding: 20,
    },
    contentText: {
        fontSize: 18,
        color: "black"
    },
    btnSec: {
        flexDirection: "row",
        padding: 20,
    },
    btn: {
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: "rgba(0, 0, 255, 0.5)",
    },
    btnReset: {
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: "red",
    },
    btnText: {
        color: "white",
        fontSize: 18,
    },
    messageText: {
        fontSize: 18,
        color: "black",
        padding: 20,
    },
})