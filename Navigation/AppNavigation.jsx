import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigation from './BottomTabNavigation'
import { Cart, ProductDetails } from '../Screens'


const Stack = createNativeStackNavigator()


const Navigator = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
          </Stack.Navigator>
      </NavigationContainer>
        
    )
}


const AppNavigation = () => {
  return (
    
    <Navigator />

  )
}

export default AppNavigation