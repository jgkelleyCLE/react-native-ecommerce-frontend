import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/styles'

const NewArrivals = () => {
  return (
    <View className="mx-4">
        <View className="flex-row items-center justify-between">
            <Text className="text-neutral-600 text-2xl">New Arrivals</Text>
            <TouchableOpacity>
                <Ionicons name="ios-grid" size={24} color={COLORS.indigo500} />
            </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default NewArrivals