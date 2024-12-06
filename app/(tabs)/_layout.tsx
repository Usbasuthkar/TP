import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet,View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].background;

  return (
    <View style={{flex:1,backgroundColor:'#ecece9'}}>
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'grey', 
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: [
          styles.tabBar,
          Platform.select({
            ios:{
              // Use a transparent background on iOS to show the blur effect
               position: 'absolute',
            }
          }),
        ],
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: {marginTop: 5},
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'New Request',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="add-circle" color={'#fadb61'} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Record Visit',
          tabBarIcon: ({ color }) => <Entypo size={28} name="camera" color={'#fadb61'} />,
        }}
      />
    </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderRadius: 40,
    marginHorizontal: 20,
    marginBottom: 25,
    elevation: 5,
    height: 70,
    borderWidth:1,
    borderColor:"#b6c7e3",
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 5,
  },
});
