import React, { useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import SwipeButton from 'rn-swipe-button';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon  from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Index() {
  const date = new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  const [activeTab, setActiveTab] = useState(0); 

  const tabContent = [
   <View style={{height:100}}>
       <View style={{width:316,
       borderWidth:1,
       borderColor:"#b6c7e3",
      borderRadius:20,
      marginRight:5,
      height:120,
      backgroundColor:"white"}}> 
      <Text style={{marginLeft: 10,paddingTop: 10,fontWeight:"bold",fontSize:20}}>Sick Leave</Text>
      <Text style={{marginLeft:10,paddingTop:10,color:"grey"}}><Ionicon name="person"/>  Approver Name</Text>
      <Text style={{marginLeft:10,paddingTop:15,color:"grey"}}><Fontisto name="stopwatch"/>  29Feb - 2March</Text>
      <View style={{borderRadius:17,width:75,backgroundColor:"#f8e5d7",height:29,marginLeft:230,marginTop:-19}}><Text style={{color:"#e37f4b",fontWeight:'bold',paddingLeft:10,paddingTop:4}}>Rejected</Text></View>
    </View>
   </View>,
    <View style={{height:100}}>
      <Image style={{marginLeft:40,height:190,marginTop:50}} source={require("./noReq.png")}></Image>
    </View>
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.intro}>
          <View style={{flex:1,flexDirection:'row'}}>
          <Text style={{ color: 'grey' }}>Good Morning, Ujwal!</Text>
              <TouchableOpacity style={{position: 'absolute',right:40,top:15}} onPress={()=>{alert('You are trying to exit!!')}}><MaterialCommunityIcon name="logout"  size={30}/></TouchableOpacity>
          </View>
          <Text style={{ fontSize: 20,fontWeight:'bold' }}>
              {date}, {new Date().getFullYear()}
            </Text>
          <View
            style={{
              marginTop: 30,
              backgroundColor: 'white',
              width: '88%',
              height: '17%',
              borderRadius: 10,
              borderWidth:1,
              borderColor:"#b6c7e3"
            }}
          >
            <SwipeButton
              thumbIconBackgroundColor="#b1dfb2"
              thumbIconBorderColor="#b1dfb2"
              thumbIconStyles={{borderRadius: 50}}
              thumbIconImageSource={require("./arrow.png")}
              title="Slide to punch in"
              titleColor='white'
              height={60}
              railBackgroundColor="#63bc6d"
              railBorderColor="#63bc6d"
              railFillBackgroundColor="#63bc6d"
              railFillBorderColor="#63bc6d"
              shouldResetAfterSuccess={true}
              onSwipeSuccess={() => alert('Swiped successfully!')}
            />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 30 }}>
            <View
              style={{
                width: '42%',
                height: '105%',
                backgroundColor: 'white',
                marginRight: 5,
                borderRadius: 10,
                borderWidth:1,
       borderColor:"#b6c7e3",
              }}
            >
              <Text style={styles.leaves}>Available Leaves</Text>
              <Text style={{ marginLeft: 10, fontSize: 30, marginTop: 5,fontWeight:'bold' }}>20</Text>
            </View>
            <View
              style={{
                width: '42%',
                height: '105%',
                backgroundColor: 'white',
                marginLeft: 5,
                borderRadius: 10,
                borderWidth:1,
       borderColor:"#b6c7e3",
              }}
            >
              <Text style={styles.leaves}>Used Leaves</Text>
              <Text style={{ marginLeft: 10, fontSize: 30,fontWeight:'bold' ,marginTop: 5 }}>8</Text>
            </View>
          </View>
          <Text style={{ marginBottom:10,marginLeft: -1, fontSize: 23, fontWeight: 'bold'}}>My Requests</Text>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 0 && styles.activeTab,
              ]}
              onPress={() => setActiveTab(0)}
            >
              <Text
                style={[styles.tabButtonText,activeTab===0 && styles.activeTabText]}
              >
                Leave
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 1 && styles.activeTab,
              ]}
              onPress={() => setActiveTab(1)}
            >
              <Text
                style={[styles.tabButtonText,activeTab===1 && styles.activeTabText]}
              >
                Advance
              </Text>
            </TouchableOpacity>
          </View>
          {tabContent[activeTab]}
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: -2,
    marginRight:5,
    backgroundColor: "white",
    width: 318,
    height: 37,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom:10,
    borderWidth:1,
       borderColor:"#b6c7e3",
  },
  tabButtonText: {
    fontSize: 16,
    color: 'grey',
  },
  activeTabText:{
    color:'black',
    fontWeight:'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#ecece9',
    justifyContent: 'center',
  },
  tabButton: {
    marginTop:3,
    marginBottom:3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    backgroundColor: 'white',
    borderRadius: 30,
    marginHorizontal: 5,
    
  },
  activeTab: {
    backgroundColor: '#fadb61',
    color:'grey',
    fontWeight:'bold'
  },
  intro: {
    marginLeft: 30,
    marginBottom: 100,
  },
  leaves: {
    marginLeft: 10,
    marginTop: 10,
    color: 'grey',
  },
  tabText: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 10,
  },
});
