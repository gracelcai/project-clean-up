//const { MongoClient } = require('mongodb');
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

  return (
   <NavigationContainer>
    <stack.Navigator initalRouteName = 'Sign Up'>
      <stack.Screen name = "Sign Up" component={SignUp} options={{headerShown: false}}/>
      <stack.Screen name = "Login" component={Login} options={{headerShown: false}}/>
      <stack.Screen name = "Home" component={Home} options={{headerShown: false}}/>
    </stack.Navigator>
   </NavigationContainer>
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
