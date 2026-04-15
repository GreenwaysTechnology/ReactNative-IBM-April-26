import { StatusBar, View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

function Layout() {
    const insets = useSafeAreaInsets();
    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, styles.container]}>
        {/* Inner boxes */}
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        <View style={{ flex: 2, backgroundColor: 'yellow' }}></View>
        <View style={{ flex: 3, backgroundColor: 'blue' }}></View>
        <View style={{ flex: 4, backgroundColor: 'green' }}></View>

    </View>
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Layout />
    </SafeAreaProvider>
}
export default App

//styles for components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 250, 240)",
        flexDirection:"column"
    },
    text: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: 'rgb(215, 229, 233)',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }
})