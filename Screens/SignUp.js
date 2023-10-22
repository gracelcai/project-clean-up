import React, { useState } from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Login from './login.js';
import Home from './home.js';


export default function SignUp({navigation}){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return(
        <View style={styles.container}>
            <View style={{marginHorizontal: 20}}>
                <Text style={styles.headers}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
                <Text style={styles.headers}>Name</Text>
                <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)}/>
                <Text style={styles.headers}>Password</Text>
                <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                <Pressable style={styles.button} onPress={handleSubmit()}>Sign Up</Pressable>
                <Text>Already have an account? <href src={<Login/>}>Login.</href></Text>
            </View>
        </View>
    )
}

function handleSubmit() {
    return(
        <Home/>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 30,
        height: 50,
        backgroundColor: "#C5E2FF",
        justifyContent: 'center',
        padding: 16,
        fontSize: 20
    },
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#BFCEB8"
    },
    headers: {
        fontSize: 24,
        marginBottom: 15
    },
    button: {
        marginTop: 24,
        fontSize: 20,
        backgroundColor: "#BFCEB8",
        justifyContent: "center"
    }
});