import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Welcome from '../Components/home/Welcome'
import Carousel from '../Components/home/Carousel'
import NewArrivals from '../Components/home/NewArrivals'
import ProductList from '../Components/products/ProductList'

const Home = () => {

  const [interval, setInterval] = useState(3000)

  return (
    <SafeAreaView className=" flex-1 android:pt-12 bg-gray-100">
      <View className="flex-row items-center mx-4">
        {/* <Ionicons name="location-outline" size={30} color="black" /> */}

        {/* //CART WITH BADGE */}
        {/* <View className="relative w-10 h-10">
          <Ionicons className="" name="cart-outline" size={30} color="black" />
          <View className="bg-red-500 p-[1px] w-6 h-6 rounded-full absolute bottom-6 right-0 items-center justify-center">
            <Text className="text-white">3</Text>
          </View>
        </View> */}

      </View>

        <Welcome interval={interval} setInterval={setInterval} />
        <Carousel interval={interval} setInterval={setInterval} />
        <NewArrivals />
        <ProductList />
    </SafeAreaView>
    
  )
}

export default Home