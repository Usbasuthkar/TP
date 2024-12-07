import React from 'react';
import {View,Text,Image} from 'react-native';
import Leaves from './Leaves';

const TabContent:React.FC<{num:number}> = ({num})=>{
    const tabcontent = [
      <View style={{height:100}}>
          <Leaves type_of_Leave='Sick Leave' Approver_name='Approver Name' from_time='29Feb' to_time='2March' status='Rejected'/>
      </View>,
       <View style={{height:100}}>
         <Image style={{marginLeft:40,height:190,marginTop:50}} source={require("@/assets/images/noReq.png")}></Image>
       </View>
     ];
     return tabcontent[num];
  }
export default TabContent;