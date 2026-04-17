import { StatusBar, StyleSheet, useColorScheme, View, Text, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

//create object for StackNavigator
const Stack = createNativeStackNavigator()

function DashBoardScreen() {
    const navigation = useNavigation()
    return <View style={styles.container}>
        <Text style={styles.title}>Welcome to Dashboard</Text>
        <Button title="Logout" onPress={() => {
            navigation.replace("Login")
        }} />
    </View>
}

function LoginScreen() {
    const navigation = useNavigation()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        if (userName === "admin" && password === "admin") {
            navigation.replace("Dashboard") //replace prevents back navigation
        } else {
            alert("Invalid UserName and Password")
        }
    }

    return <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
            placeholder="User Name"
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
        />
        <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
    </View>
}


function App() {
    return <SafeAreaProvider>
        <AppContent />
    </SafeAreaProvider>
}

function RootStack() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Stack.Screen name="Dashboard" component={DashBoardScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
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
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
    }
});

export default App;
