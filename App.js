//const { MongoClient } = require('mongodb');
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { app } from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import SignUp from './Screens/SignUp';
import Login from './Screens/login';
import Home from './Screens/home';

// import {
//   AppProvider,
//   UserProvider,
//   RealmProvider,
//   useAuth,
// } from "@realm/react";
// Set up AppProvider, UserProvider, and RealmProvider for your app

const stack = createNativeStackNavigator();

export default function App() {
  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error!", error);
    });
  };

  return (
    //<View><Text>Hello</Text></View>
    //<SignUp/>
   // <AppProvider id="<YOUR_APP_ID>">
   // <UserProvider fallback={LoginComponent}>
    //  <RealmProvider>
    <SignUp handlesSign={handleSignUp}/>
  //  <NavigationContainer>
  //   <stack.Navigator initalRouteName = 'Sign Up'>
  //     <stack.Screen name = "Sign Up" component={SignUp} options={{headerShown: false}}/>
  //     <stack.Screen name = "Login" component={Login} options={{headerShown: false}}/>
  //     <stack.Screen name = "Home" component={Home} options={{headerShown: false}}/>
  //   </stack.Navigator>
  //  </NavigationContainer>
  //  </RealmProvider>
  //  </UserProvider>
  //   </AppProvider>
  );
}
// Navigation.registerComponent('Sign Up', () => SignUp);
// Navigation.events().registerAppLaunchedListener(async () => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'Sign Up'
//             }
//           }
//         ]
//       }
//     }
//   });
// });


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
