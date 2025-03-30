import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    parentContainer: { height: "100%" },
    status: { color: "grey" },
    loadingView: { flex: 1, justifyContent: "center", alignItems: "center" },
    loadingText: { fontSize: 25 },
    productCard: { width: "auto", padding: 10, flex: 1, backgroundColor: "#F8F8F8", margin: 10 },
    productTitle: { fontWeight: "bold", fontSize: 16, textAlign: "center", color: "#1E3A8A" },
    productCat: { fontWeight: "bold", fontSize: 16, color: "#4B5563" },
    productDes: { textAlign: "justify", color: "#374151" },
    productRow: { justifyContent: "space-between", flexDirection: "row", margin: 5 },
    productPrice: { fontWeight: "bold", color: "#047857" },
    productRating: { fontWeight: "bold", color: "#FBBF24" },
    productRating1: { fontWeight: "bold", color: "red" },

})