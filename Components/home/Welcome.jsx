import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../constants/styles'
import { useNavigation } from '@react-navigation/core'

const Welcome = ({ interval, setInterval }) => {

    const navigation = useNavigation()

  return (
    <View>
      <Text className="text-neutral-600 font-bold text-4xl ml-4">Find the Most</Text>
      <Text className="text-indigo-500 font-bold text-4xl ml-4">Luxurious Furniture</Text>


    {/* search bar */}
      <View className="mt-2 flex-row items-center justify-center w-11/12 bg-gray-300 self-center rounded-md">
        <TouchableOpacity className="bg-indigo-500 absolute right-0 z-10 w-12 h-[100%] items-center justify-center rounded-r-md" onPress={()=> navigation.navigate("Search")}>
        <Feather  name="search" size={30} color={COLORS.gray300} />
        </TouchableOpacity>
        <TextInput
            // value={interval}
            // onChangeText={setInterval}
                placeholder='Search furniture...'
                className="w-full p-2 text-xl rounded-md shadow-black shadow-md self-center"
            />
      </View>
      

    </View>
  )
}

export default Welcome