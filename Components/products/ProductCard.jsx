import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import '../../assets/images/fn2.jpg'
import { useNavigation } from '@react-navigation/native'

const ProductCard = () => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails")}>
        <View className="bg-gray-300 w-48 h-60 rounded-md p-1">
            <Image className="w-[100%] h-[70%] rounded-md" source={{ uri: "https://www.lumens.com/on/demandware.static/-/Sites-lumens-site-catalog/default/dwac603637/images/subdept/thumbs/furniture-living-room-furniture.jpg" }} />
            <View className="mx-2 my-1">
                <Text className="font-semibold text-lg" numberOfLines={1}>Product ksjhdfklsjdhfdsl</Text>
                <Text className="text-[12px] text-gray-700">Product Details</Text>
                <Text className="italic text-gray-700">$599.99</Text>
            </View>
            
        </View>
    </TouchableOpacity>
  )
}

export default ProductCard