import React, { useState } from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import axios from "axios";


export default function SignUp({navigation}){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    async function handleSubmit() {
        if(name.isEmpty()||email.isEmpty()||password.isEmpty()){
            alert("All fields are required");
        }

        const response = await axios.post("", {
            email,
            name, 
            password
        }).catch((err) => {
            console.log("error");
        });
        if(response.data.error){
            alert("error");
        }else{
            alert("Welcome, " + name);
        }
    }
    
    return(
        <View style={styles.container}>
            <View style={{marginHorizontal: 20}}>
                <Text style={styles.headers}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
                <Text style={styles.headers}>Name</Text>
                <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)}/>
                <Text style={styles.headers}>Password</Text>
                <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                <Pressable style={styles.button} onPress={() => {navigation.navigate('Home')}}>Sign Up</Pressable>
                <Text>Already have an account? <Text onPress={() => navigation.navigate('Login')}>Login.</Text></Text>
            </View>
        </View>
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
        marginBottom: 24,
        marginTop: 28,
        fontSize: 26,
        backgroundColor: "#C5E2FF",
        justifyContent: "center",
        borderRadius: 15,
        height: 30,
        marginHorizontal: 15,
        textAlign: 'center',
        paddingVertical:16
    }
});