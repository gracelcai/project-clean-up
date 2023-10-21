import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { React } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Screens/SignUp';

const stack = createNativeStackNavigator;

export default function App() {
  return (
    //<View><Text>Hello</Text></View>
    <SignUp/>
  //  <NavigationContainer>
  //   <stack.Navigator>
  //     <stack.Screen name = "Sign Up" component={SignUp} options={{headerShown: false}}/>
  //   </stack.Navigator>
  //  </NavigationContainer>
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
