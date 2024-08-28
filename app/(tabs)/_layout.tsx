import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown:false
    }}>
        <Tabs.Screen 
        name='home' 
        options={{
            tabBarLabel:'Home',
            tabBarIcon: ({color})=>(
                <FontAwesome6 name="house" size={24} color={color} />
                )
        }}/>
        <Tabs.Screen 
        name='add'
        options={{
            tabBarLabel:'Add',
            tabBarIcon:({color})=>(
                <AntDesign name="pluscircle" size={24} color={color} />
            )
        }}
        />
        <Tabs.Screen 
        name='profile'
        options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color})=>(
                <MaterialIcons name="verified-user" size={24} color={color} />
            )
        }}
        />
    </Tabs>
  )
}

export default TabsLayout