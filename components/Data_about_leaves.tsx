import {View,Text,StyleSheet} from 'react-native';
const Data_about_leaves:React.FC<{title:string,num:number}> = ({title,num})=>{
    return(
        <View
              style={{
                width: '49%',
                height: '105%',
                backgroundColor: 'white',
                marginRight: 5,
                borderRadius: 10,
                borderWidth:1,
       borderColor:"#b6c7e3",
              }}
            >
              <Text style={styles.leaves}>{title}</Text>
              <Text style={{ marginLeft: 10, fontSize: 30, marginTop: 5,fontWeight:'bold' }}>{num}</Text>
            </View>
    )
}
const styles = StyleSheet.create({
    leaves: {
        marginLeft: 10,
        marginTop: 10,
        color: 'grey',
      },
});
export default Data_about_leaves;