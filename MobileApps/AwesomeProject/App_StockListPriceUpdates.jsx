import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const initialStocks = [
    { id: "1", name: "AAPL", price: 250 },
    { id: "2", name: "GOOGL", price: 2800 },
    { id: "3", name: "MSFT", price: 320 },
    { id: "4", name: "TSLA", price: 900 },
    { id: "5", name: "AMZN", price: 3400 },
    { id: "6", name: "AAPL", price: 250 },
    { id: "7", name: "GOOGL", price: 2800 },
    { id: "8", name: "MSFT", price: 320 },
    { id: "9", name: "TSLA", price: 900 },
    { id: "10", name: "AMZN", price: 3400 },
    { id: "11", name: "AAPL", price: 250 },
    { id: "12", name: "GOOGL", price: 2800 },
    { id: "13", name: "MSFT", price: 320 },
    { id: "14", name: "TSLA", price: 900 },
    { id: "16", name: "AMZN", price: 3400 },
];

export default function App() {
    const [stocks, setStocks] = useState(initialStocks);

    // 🔥 Simulate real-time updates
    useEffect(() => {
        const interval = setInterval(() => {
            setStocks((prevStocks) =>
                prevStocks.map((stock) => {
                    const change = (Math.random() * 4 - 2).toFixed(2); // -2 to +2
                    const newPrice = +(stock.price + parseFloat(change)).toFixed(2);

                    return {
                        ...stock,
                        price: newPrice,
                        change: parseFloat(change),
                    };
                })
            );
        }, 2000);
        //componentWillUnMount
        return () => clearInterval(interval);
    }, []);

    const renderItem = ({ item }) => {
        const isUp = item.change > 0;

        return (
            <View style={styles.row}>
                <Text style={styles.name}>{item.name}</Text>

                <View>
                    <Text style={styles.price}>₹ {item.price}</Text>
                    <Text style={[styles.change, { color: isUp ? "green" : "red" }]}>
                        {item.change > 0 ? "+" : ""}
                        {item.change}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.header}>📈 Live Stock Prices</Text>
            <FlatList
                data={stocks}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        fontSize: 16,
        textAlign: "right",
    },
    change: {
        fontSize: 14,
        textAlign: "right",
    },
});