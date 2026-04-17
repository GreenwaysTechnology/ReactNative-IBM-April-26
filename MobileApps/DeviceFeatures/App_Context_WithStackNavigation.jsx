import { StatusBar, StyleSheet, View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {   
    const [userToken, setUserToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await AsyncStorage.getItem("userToken");
                setUserToken(token);
            } catch (e) {
                console.log("Failed to load token");
            }
            setLoading(false);
        };
        loadToken();
    }, []);

    const login = async (username, password) => {
        if (username === "admin" && password === "admin") {
            const token = "dummy-token-123";
            await AsyncStorage.setItem("userToken", token);
            setUserToken(token);
        } else {
            alert("Invalid Credentials");
        }
    };

    const logout = async () => {
        await AsyncStorage.removeItem("userToken");
        setUserToken(null);
    };

    return (
        <AuthContext.Provider value={{ userToken, login, logout, loading }}>
            {children}  
            {/* render AppContent */}
        </AuthContext.Provider>
    );
};

const Stack = createNativeStackNavigator();

function DashBoardScreen() {
    const { logout, userToken } = useContext(AuthContext);
    const navigation = useNavigation();  

    useEffect(() => {
        navigation.setOptions({
            title: `${userToken}`  
        });
    }, [userToken]);  // re-runs if token changes

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Dashboard</Text>
            <Button title="Logout" onPress={logout} />
        </View>
    );
}

function LoginScreen() {
    const { login } = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
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
            <Button title="Login" onPress={() => login(userName, password)} />
        </View>
    );
}

function RootStack() {
    const { userToken, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
        }}>
            {userToken
                ? <Stack.Screen name="Dashboard" component={DashBoardScreen} />
                : <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
            }
        </Stack.Navigator>
    );
}

function AppContent() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {
            paddingTop: safeAreaInsets.top,
            paddingBottom: safeAreaInsets.bottom,
            paddingLeft: safeAreaInsets.left,   
            paddingRight: safeAreaInsets.right,
        }]}>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </View>
    );
}

function App() {
    return (
        <SafeAreaProvider>
            <AuthProvider>          
                <AppContent />
            </AuthProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 },
});

export default App;