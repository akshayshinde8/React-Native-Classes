import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    parentContainer: { backgroundColor: "white" },
    status: { color: "grey" },
    productCard: { width: "auto", padding: 10, margin: 10 },
    productTitle: { fontWeight: "bold", fontSize: 20, textAlign: "center", color: "#1E3A8A" },
    productDes: { textAlign: "justify", color: "#374151" },
    btn: { borderRadius: 10, backgroundColor: "blue", alignItems: "center", padding: 10, },
    btnText: { fontWeight: "bold", fontSize: 16, color: "#fff," },
    btnPressed: { backgroundColor: "green" },
    btnReleased: { backgroundColor: "#0069d9" },
    cartText: { alignSelf: "flex-end", marginHorizontal: 10, fontSize: 20, color: "#0069d9", },
    productPrice: { fontWeight: "bold", color: "#047857", fontSize: 20, alignSelf: "flex-end" },
    addToCartBadge: { position: 'absolute', top: -5, right: 10, backgroundColor: '#ff0000', padding: 5, borderRadius: 10 },
    addToCartBadgeText: { fontSize: 12, color: '#fff' },
    heartImage:{ width: 20, height: 20, position: "absolute", left: 10 }
});
