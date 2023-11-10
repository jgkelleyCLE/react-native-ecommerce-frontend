import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons'
import { COLORS } from '../constants/styles'
import { useNavigation } from '@react-navigation/native'
// import Animated from 'react-native-reanimated'

const ProductDetails = () => {

    const [count, setCount] = useState(1)

    const navigation = useNavigation()

    const price = 600


  return (
    <View className="flex-1 bg-gray-100">
        <View>
            <TouchableOpacity className="bg-indigo-500/90 w-8 h-8 items-center justify-center rounded-full absolute top-14 left-4 z-10" onPress={()=> navigation.goBack()}>
                <Ionicons className="self-center" name="chevron-back-sharp" size={30} color={COLORS.gray300} />
            </TouchableOpacity>
            <Image className="w-[100%] h-[330px]" source={{ uri: "https://www.livingdesignsfurniture.com/wp-content/uploads/2022/03/shutterstock_1929872735-1.webp" }} />

            {/* negative margin overlaps product details ontop of image -- PRODUCT ROW */}
            <View className="mx-8 -mt-5 bg-gray-100 self-center pt-3 rounded-t-3xl w-[100%]">
                <View className="flex-row items-center justify-between mt-2">
                    <Text className="mx-4 text-2xl font-medium text-neutral-600">L-Shaped Sectional</Text>
                    <Text className="mx-4 text-xl text-neutral-500 italic">${(price * count).toLocaleString('en-US')}.00</Text>
                </View>

            </View>

            {/* quantity row */}
            <View className="mx-4 mt-2">
                <View className="flex-row items-center justify-end gap-3">
                    <Pressable disabled={count < 2} onPress={()=> setCount(count - 1)}>
                        <AntDesign name="minuscircleo" size={28} color={COLORS.gray600} />
                    </Pressable>
                
                <Text className="text-xl text-gray-600">{count}</Text>
                    <Pressable onPress={()=> setCount(count + 1)}>
                        <AntDesign name="pluscircleo" size={28} color={COLORS.gray600} />
                    </Pressable>
                </View>
            </View>

            {/* DESCRIPTION */}
            <View className="mt-3 mx-4">
                <Text className="text-xl text-neutral-600">Description</Text>
                <Text className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis possimus perspiciatis temporibus corrupti recusandae omnis, ipsa magnam saepe error porro eveniet, ipsum debitis nobis quidem nemo ullam numquam, dolore corporis aspernatur sunt? Ex quis, tenetur maxime libero nobis ipsa soluta deleniti corrupti harum cumque exercitationem nisi hic saepe est rem officiis sint aliquid iste nesciunt necessitatibus perferendis recusandae? Recusandae consectetur temporibus sequi magni distinctio officiis voluptate possimus eius! Facilis maiores ex officiis perspiciatis alias repellat eligendi eum nihil recusandae!</Text>
            </View>

            <View className="bg-indigo-100 flex-row items-center p-2 rounded-md w-11/12 self-center mt-4">
                <FontAwesome name="truck" size={20} color="black" />
                <Text className="pl-4">Free delivery on this item!</Text>
            </View>

            

        </View>
        <TouchableOpacity className="bg-indigo-500 items-center p-2 rounded-md self-center w-11/12 mt-4 absolute bottom-12">
                <Text className="text-white text-2xl">Add to Cart</Text>
            </TouchableOpacity>
    </View>
  )
}

export default ProductDetails