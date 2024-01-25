import { StyleSheet, Text, View } from 'react-native';
import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './Screens/SignUp';
import Login from './Screens/login';
import Home from './Screens/home';
import Profile from './Screens/profile';
import Trash from './Screens/camera';

const stack = createNativeStackNavigator();

export default function App() {

  return (
   <NavigationContainer>
    <stack.Navigator initalRouteName = 'Login'> 
    <stack.Screen name = "Login" component={Login} options={{headerShown: false}}/>
      <stack.Screen name = "Sign Up" component={SignUp} options={{headerShown: false}}/>
      <stack.Screen name = "Home" component={Home} options={{headerShown: false}}/>
      <stack.Screen name = "Profile" component={Profile} options={{headerShown: false}}/>
    </stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
