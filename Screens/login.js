import React, { useState } from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { App } from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onPressLogin = async (email, password) => {
        console.log("User trying to log in: " + email + ", with password: " + password);
        const auth = getAuth(App);
                    signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      const user = userCredential.user;
                      navigation.navigate('Home Page');
                      console.log("User logged in", user);
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      if(error.code == "auth/invalid-credential"){
                        alert("Wrong email or password");
                      }
                      console.log("Error!", error.code);
                    });
    };
    return(
        <View style={styles.container}>
            <View style={{marginHorizontal: 20}}>
                <Text style={styles.headers}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
                <Text style={styles.headers}>Password</Text>
                <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                <Pressable style={styles.button} onPress={() => {onPressLogin(email, password)}}><Text>Login</Text></Pressable>
                <Text>Need to make an account? <Text onPress={() => navigation.navigate('Sign Up')}>Sign up.</Text></Text>
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