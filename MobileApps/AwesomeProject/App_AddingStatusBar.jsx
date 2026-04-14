import { StatusBar, View,Text } from "react-native";

function Hello() {
    return <View>
        <Text>Hello React Native!</Text>
    </View>
}

function App() {
    return <>
        <StatusBar barStyle="dark-content"/>
        <Hello />
    </>
}
export default App