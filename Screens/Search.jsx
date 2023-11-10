import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../constants/styles'
import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'

const Search = () => {

  // const navigation = useNavigation()
  const [searchInput, setSearchInput] = useState("")

  return (
    <SafeAreaView className="bg-gray-100 flex-1 android:pt-12">
      <Text className="text-2xl text-neutral-600 ml-4">Search</Text>

      {/* search bar */}
      <View className="mt-2 flex-row items-center justify-center w-11/12 bg-gray-300 self-center rounded-md">
        <TouchableOpacity className="bg-indigo-500 absolute right-0 z-10 w-12 h-[100%] items-center justify-center rounded-r-md" onPress={()=> console.log(`search ${searchInput}`)}>
        <Feather  name="search" size={30} color={COLORS.gray300} />
        </TouchableOpacity>
        <TextInput
            autoCapitalize='none'
            placeholder='Search furniture...'
            className="w-full p-2 text-xl rounded-md shadow-black shadow-md self-center"
            value={searchInput}
            onChangeText={setSearchInput}
            />
      </View>
    </SafeAreaView>
  )
}

export default Search