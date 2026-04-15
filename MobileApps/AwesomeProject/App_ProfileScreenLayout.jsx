import { StatusBar, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

function ProfileScreen() {
    const insets = useSafeAreaInsets();
    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, styles.container]}>
        {/* Header section */}
        <View style={styles.header}>
            {/* Profile Pic */}
            <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={styles.avatar} />
            {/* Name of the Profle */}
            <Text style={styles.name}>Dhivya Sree</Text>
            {/* Email of the profile */}
            <Text style={styles.email}>dhivyasubramanian@gmail.com</Text>
        </View>
        {/* Details section */}
        <View style={styles.details}>
            <Text style={styles.info}>Role: Mobile App Developer</Text>
            <Text style={styles.info}>Location:UK</Text>
            <Text style={styles.info}>Experience: 10 Years</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.logout]}>
                <Text style={[styles.buttonText, styles.logout]}>Logout</Text>
            </TouchableOpacity>
        </View>

    </View>
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <ProfileScreen />
    </SafeAreaProvider>
}
export default App

//styles for components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: "space-evenly",
        rowGap:10,
        columnGap:10
    },
    header: {
        alignItems: 'center',
        paddingTop: 40,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    email: {
        color: 'gray',
    },
    details: {
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 20,
    },

    info: {
        fontSize: 16,
        marginVertical: 5,
    },
    actions: {
        padding: 20,
    },

    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
    },

    logout: {
        backgroundColor: '#dc3545',
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },



})