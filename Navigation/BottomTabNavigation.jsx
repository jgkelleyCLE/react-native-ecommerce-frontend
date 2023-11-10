import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Search, Profile, Cart } from '../Screens'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/styles'

const Tab = createBottomTabNavigator()


const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 70,
        elevation: 0
    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ tabBarIcon: ({ focused }) => {
            return <Ionicons name={focused ? "home" : "home-outline"} size={30} color={focused ? COLORS.gray500 : COLORS.gray500}  />
        } }}  
        />

        <Tab.Screen 
        name="Search" 
        component={Search}  
        options={{ tabBarIcon: ({ focused }) => {
            return <Ionicons name="search-sharp" size={30} color={focused ? COLORS.gray500 : COLORS.gray500}  />
        } }}  
        />

        <Tab.Screen 
        name="Profile" 
        component={Profile}  
        options={{ tabBarIcon: ({ focused }) => {
            return <Ionicons name={focused ? "person" : "person-outline"} size={30} color={focused ? COLORS.gray500 : COLORS.gray500}  />
        } }}  
        />
        <Tab.Screen 
        name="Cart" 
        component={Cart}  
        options={{ tabBarBadge: 5,
            tabBarBadgeStyle: {
                backgroundColor: COLORS.indigo500,
                
            },
            tabBarIcon: ({ focused }) => {
            return <Ionicons name={focused ? "cart" : "cart-outline"} size={30} color={focused ? COLORS.gray500 : COLORS.gray500}  />
        } }}  
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation