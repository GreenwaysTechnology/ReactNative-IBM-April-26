import { StatusBar, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

function Hello() {
    const insets = useSafeAreaInsets();
    console.log(insets)
    return <View style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }}>
        <Text>Hello React Native!</Text>
    </View>
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Hello />
    </SafeAreaProvider>
}
export default App