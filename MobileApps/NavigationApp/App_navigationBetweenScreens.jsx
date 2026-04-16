import { StatusBar, StyleSheet, useColorScheme, View, Text, TouchableOpacity, Alert } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//create object for StackNavigator
const Stack = createNativeStackNavigator()

//screens
function HomeScreen() {
    const navigation = useNavigation()

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity activeOpacity={0.4} underlayColor={'lightgreen'} onPress={() => {
            Alert.alert("Moving to Details screen")
            navigation.navigate("Details")
        }}>
            <Text>Go to Details</Text>
        </TouchableOpacity>
    </View>
}
function DetailsScreen() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
}


function App() {
    return <SafeAreaProvider>
        <AppContent />
    </SafeAreaProvider>
}

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}
function AppContent() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {
            paddingTop: safeAreaInsets.top,
            paddingBottom: safeAreaInsets.bottom,
            PaddingLeft: safeAreaInsets.left,
            paddingRight: safeAreaInsets.right
        }]}>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
