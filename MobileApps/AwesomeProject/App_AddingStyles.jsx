import { StatusBar, View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

function Hello() {
    const insets = useSafeAreaInsets();
    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, styles.container]}>
        <Text style={styles.text}>Hello React Native!</Text>
    </View>
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Hello />
    </SafeAreaProvider>
}
export default App

//styles for components
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "rgb(209, 146, 29)"
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