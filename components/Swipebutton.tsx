import {View} from 'react-native';
import SwipeButton from 'rn-swipe-button';

const Swipebutton = ()=>{
    return(
        <View
        style={{
          marginTop: 30,
          backgroundColor: 'white',
          paddingVertical: '2%',
          borderRadius: 10,
          borderWidth:1,
          borderColor:"#b6c7e3"
        }}
      >
        <SwipeButton
          thumbIconBackgroundColor="#b1dfb2"
          thumbIconBorderColor="#b1dfb2"
          thumbIconStyles={{borderRadius: 50}}
          thumbIconImageSource={require("@/assets/images/arrow.png")}
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

    )
}
export default Swipebutton;