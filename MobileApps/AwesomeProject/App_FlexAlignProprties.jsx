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
        <View style={{
            flex: 1, backgroundColor: 'lightgreen',
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text style={styles.title}>Welcome</Text>
        </View>


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
    },
    title: {
        //css properties
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 3,
    }

})