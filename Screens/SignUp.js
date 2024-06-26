import React, { useState } from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { App } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, addDocRef} from "firebase/firestore";
import { db } from "../database/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


async function writeData(collection, data){
    const addDocRef = await addDoc(collection, data);
    console.log('Document written with ID: ', addDocRef.id);
}


export default function SignUp({navigation}){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const col = collection(db, "users");
    

    const onPressSignUp = async (name, email, password) => {
        if(name.length == 0 || email.length == 0 || password.length == 0 ){
            alert("All fields are required");
        }else{
            console.log(name + " is trying to sign up with: " + email + ", with password: " + password);
                const auth = initializeAuth(App,{
                    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
                  });
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  const user = userCredential.user;
                  const data = {
                    email: email,
                    name: name,
                    password: password,
                    points: 0,
                    litter: 0
                  };
                  writeData(col, data);
                  console.log("User signed", user);
                  navigation.navigate('Home Page'); 
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  if(errorCode == "auth/email-already-in-use"){
                    alert("User already has this email");
                  }
                  console.log("Error!", errorMessage);
                });
        }
    };
    
    return(
        <View style={styles.container}>
            <View style={{marginHorizontal: 20}}>
                <Text style={styles.headers}>Name</Text>
                <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} />
                <Text style={styles.headers}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)}/>
                <Text style={styles.headers}>Password</Text>
                <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                <Pressable style={styles.button} onPress={() => {onPressSignUp(name, email, password)}}><Text>Sign Up</Text></Pressable>
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