import React, { useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabContent from '@/components/TabContent';
import Swipebutton from '@/components/Swipebutton';
import Data_about_leaves from '@/components/Data_about_leaves';
import  Tabs  from '@/components/Tabs';

export default function Index() {
  const date = new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  const [activeTab, setActiveTab] = useState(0); 

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.intro}>
          <View style={{flex:1,flexDirection:'row'}}>
          <View style={{marginTop:-28}}> 
          <Text style={{ color: 'grey' }}>Good Morning, Ujwal!</Text>
          <Text style={{ fontSize: 20,fontWeight:'bold' }}>
              {date}, {new Date().getFullYear()}
            </Text>
          </View>
          <TouchableOpacity style={{position:'absolute',right:6,top:-16}} onPress={()=>{alert('You are trying to exit!!')}}><MaterialCommunityIcon name="logout"  size={30}/></TouchableOpacity>
          </View>
            <Swipebutton/>
          <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 30}}>
            <Data_about_leaves title="Available Leaves" num={20}/>
            <Data_about_leaves title='Used Leaves' num={8} />
          </View>
          <Text style={{ marginBottom:10,marginLeft: -1, fontSize: 23, fontWeight: 'bold'}}>My Requests</Text>
          <View style={styles.tabsContainer}>
            <Tabs title='Leave' isActive={activeTab===0} onPress={() => setActiveTab(0)}/>
            <Tabs title='Advance' isActive={activeTab===1} onPress={() => setActiveTab(1)}/>
          </View>
          <TabContent num={activeTab}/>
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
    marginHorizontal: "90%",
    paddingVertical:'1%',
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom:10,
    borderWidth:1,
       borderColor:"#b6c7e3",
  },
  container: {
    flex: 1,
    backgroundColor: '#ecece9',
    justifyContent: 'center',
  },
  intro: {
    marginLeft: 30,
    marginBottom: 102,
    marginRight:32
  },
});
