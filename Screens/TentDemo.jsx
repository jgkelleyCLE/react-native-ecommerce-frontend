import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useGetAllTentsQuery } from '../redux/tentApi'
import { COLORS, SIZES } from '../constants/styles'


const TentDemo = () => {

  // const [isActive, setIsActive] = useState(false)
  const [activeTent, setActiveTent] = useState("643dc74a24bb6ad080885e21")

  const { data: tents, isLoading, isError, isSuccess, error } = useGetAllTentsQuery()

  let content;
  
  console.log(activeTent)

  if(isLoading){
    content = <ActivityIndicator color={COLORS.emerald500} size='large' />
  }else if(isSuccess){
    content = <FlatList
          data={tents}
          renderItem={({ item })=> {
            let isActive = item._id == activeTent
            
            return (
              <Pressable onPress={()=> setActiveTent(item._id)} className={`${isActive ? 'bg-gray-300 h-[300px] items-center' : 'bg-gray-100 flex-row items-center justify-between'} m-2 p-1 shadow-md rounded-md `} key={item._id}>
              
                  <Image source={{ uri: item.image }} className={`${isActive ? 'h-[200px] w-[100%]' : 'h-[75px] w-[125px]'} rounded-md`} />
                  <View >
                    <Text style={styles.cardHeader}>{item.product}</Text>
                    <Text style={ styles.cardPrice }>${item.price.toLocaleString('en-US')}.00</Text>
                    
                    
                  </View>
                  {
                      isActive ?
                      <Pressable className="bg-green-400 p-2 items-center rounded-md w-11/12 mb-2">
                        <Text className="text-white text-lg font-bold">View</Text>
                      </Pressable>
                      : null
                    }
                
              </Pressable>
            )
          }}
          keyExtractor={(item) => item.id}
    />
      
   
  }else if(isError){
    content = <Text>Error fetching tents</Text>
  }


  return (
    
    <View className="bg-white flex-1">
      <Text style={styles.header}>Tents</Text>

        {content}

    </View>
    
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 31,
    color: COLORS.blue500,
    fontWeight: 'bold',
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.emerald500,
    paddingTop: 40
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    // backgroundColor: 
    padding: 3,
    borderRadius: 10,
    shadowOpacity: .4,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowColor: COLORS.gray400,
    elevation: 3,
    width: SIZES.width * .95,
    height: SIZES.height * .10,
    alignSelf: 'center'
  },
  productImage: {
    width: 125,
    height: 75,
    borderRadius: 7
  },
  cardHeader: {
    fontSize: SIZES.large,
    color: COLORS.neutral600,
    padding: 2
  },
  cardPrice: {
    fontSize: SIZES.medium,
    color: COLORS.neutral500,
    padding: 2
  }
})

export default TentDemo