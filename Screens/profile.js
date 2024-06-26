import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View,SafeAreaView, StyleSheet, Pressable, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Navbar from './navbar';
import { App } from "../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { db } from '../database/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';


//For some reason the user data is not being defined??
export default function Profile({ navigation }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
  const fetchUserData = async () => {
    try{
      const userEmail = String(getAuth(App).currentUser.email);
      const col = collection(db, 'users');
      console.log(String(userEmail));
      const userQuery = query(col, where('email', '==', userEmail));
      const querySnapshot = await getDocs(userQuery);
      console.log();
      querySnapshot.forEach((doc) => {
        setUserData(doc.data());
      });
      // console.log("User data: " + userData);
    }catch(error){
      console.log(error + ": " +error.message);
      console.log("uh oh");
    }
    };

    fetchUserData();
  }, []);
  //console.log("User data: " + userData.name);
  
  //const userName = "Name";//getAuth(App).currentUser.name;

  return (
    <View>
        <View style={styles.user}>
          {/*Need to fix styling*/}
          <View style={styles.userPfp}>
          <FontAwesome name="circle" size={160} color="black" />
          </View>
          { userData ?(
          <View>
            <Text style={styles.userText}>{userData.name}</Text>
            <Text style={styles.userText}>{userData.email}</Text>
          </View>
):
<View>
<Text style={styles.userText}>{"Loading"}</Text>
<Text style={styles.userText}>{"Loading"}</Text>
</View>
}
        </View>
        <View style={styles.stats}>
          { userData ? ( 
          <> 
          <View>
            <Text style={{ fontWeight: 800 }}>{userData.points}</Text>
            <Text>Points</Text>
          </View><View>
              <Text style={{ fontWeight: 800 }}>{userData.litter}</Text>
              <Text>Litter Collected</Text>
            </View></>
          ): 
          <><View>
            <Text style={{ fontWeight: 800 }}>Loading</Text>
            <Text>Points</Text>
          </View><View>
              <Text style={{ fontWeight: 800 }}>Loading</Text>
              <Text>Litter Collected</Text>
            </View></>
        }
        </View>
        <>
        <Pressable style={styles.button} onPress={() => {
          signOut(getAuth(App))
          navigation.navigate("Login");
        }
      }><Text>Sign Out</Text></Pressable>
        </>
        <View style={{position: 'fixed', bottom: 0, left:0, right: 0, marginBottom: 0, backgroundColor: '#C5E2FF' }}>
          <Navbar/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  userPfp: {
    width: 160,
    height: 160,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 20
  },
  userText: {
    fontSize: 24,
    marginTop: 25
  },
  stats:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1
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