import * as React from 'react';
import { Text, View,SafeAreaView, StyleSheet, Pressable, TextInput } from 'react-native';
import { BsFillCircleFill } from 'react-icons/bs';
import Navbar from './navbar';

export default function Profile({ navigation }) {

  return (
    <View>
        <View style={styles.user}>
          <BsFillCircleFill style={styles.userPfp}/>
          <View>
            <Text style={styles.userText}>Name</Text>
            <Text style={styles.userText}>Email</Text>
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
      <Navbar />
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
    marginLeft: 30
  },
  userText: {
    fontSize: 24,
    marginTop: 15
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