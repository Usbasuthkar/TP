import React from 'react';
import {View,Text,Image} from 'react-native';
import Ionicon  from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
type meta_data = {
    type_of_Leave:string,
    Approver_name:string,
    from_time:string,
    to_time:string,
    status:string;
}
const Leaves:React.FC<meta_data> = ({type_of_Leave,Approver_name,from_time,to_time,status})=>{
    const backgroundcolor = ()=>{return (status === 'Rejected' ? "#f8e5d7":"#9ce6be");}
    const text = ()=>{return(status==='Rejected' ? '#e37f4b':'#dcf5e8');}
    return (
        <View style={{width:"98%",
            borderWidth:1,
            borderColor:"#b6c7e3",
           borderRadius:20,
           marginRight:5,
           marginBottom:10,
           paddingBottom:18,
           backgroundColor:"white"}}> 
           <Text style={{marginLeft: 10,paddingTop: 10,fontWeight:"bold",fontSize:20}}> {type_of_Leave}</Text>
           <Text style={{marginLeft:10,paddingTop:10,color:"grey"}}><Ionicon name="person"/> {Approver_name}</Text>
           <Text style={{marginLeft:10,paddingTop:15,color:"grey"}}><Fontisto name="stopwatch"/> {from_time} - {to_time}</Text>
           <View style={{borderRadius:17,width:"22%",backgroundColor:backgroundcolor(),height:"24%",marginLeft:240,marginTop:-20}}><Text style={{color:text(),fontWeight:'bold',paddingLeft:8,paddingTop:2}}>{status}</Text></View>
         </View>
    )
}
export default Leaves;