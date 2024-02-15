import * as React from 'react';
import { Text, View,SafeAreaView, StyleSheet, Pressable, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Navbar from './navbar';
import { App } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import db from '../database/firestore';
import { collection, getDocs } from 'firebase/firestore';

export default function Profile({ navigation }) {
  const userName = "Name";//getAuth(App).currentUser.name;
  const userEmail = getAuth(App).currentUser.email;
  //const points = db.collections().getDocs();
  return (
    <View>
        <View style={styles.user}>
          {/*Need to fix styling*/}
          <View style={styles.userPfp}>
          <FontAwesome name="circle" size={160} color="black" />
          </View>
          <View>
            <Text style={styles.userText}>{userName}</Text>
            <Text style={styles.userText}>{userEmail}</Text>
          </View>
        </View>
        <View style={styles.stats}>
          <View> 
            <Text style={{fontWeight: 800}}>###</Text>
            <Text>Points</Text>
          </View>
          <View>
            <Text style={{fontWeight: 800}}>###</Text>
            <Text>Litter Collected</Text>
          </View>
        </View>
        <View style={{padding: '75%'}}>

        </View>
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
  }
});