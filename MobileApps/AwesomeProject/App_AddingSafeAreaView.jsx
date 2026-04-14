import { StatusBar, View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Hello() {
    return <SafeAreaView>
        <Text>Hello React Native!</Text>
    </SafeAreaView>
}

function App() {
    return <View>
        <StatusBar barStyle="dark-content"/>
        <Hello />
    </View>
}
export default App