import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
type TabProps = {
    title: string;
    isActive: boolean;
    onPress: () => void;
  };
  
const Tabs: React.FC<TabProps> = ({ title, isActive, onPress })=>{
    return(
        <TouchableOpacity style={[styles.tabButton,isActive && styles.activeTab,]}onPress={onPress}>
            <Text style={[styles.tabButtonText,isActive && styles.activeTabText]}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
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
    tabButtonText: {
        fontSize: 16,
        color: 'grey',
      },
      activeTabText:{
        color:'black',
        fontWeight:'bold'
      },
      activeTab: {
        backgroundColor: '#fadb61',
        color:'grey',
        fontWeight:'bold'
      },
      
});
export default Tabs;