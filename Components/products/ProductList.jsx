import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/styles'
import ProductCard from './ProductCard'

const ProductList = () => {

  const products = [1, 2, 3, 4]

  return (
    <View className="mt-4 mx-4">
      <FlatList 
        data={products}
        renderItem={({ item }) => <ProductCard />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default ProductList