import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants/styles'

const Carousel = ({ interval, setInterval }) => {

    console.log(interval)

    const slides = [
        "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/03/NYC-furniture-stores-with-eco-friendly-furniture.jpg",
        "https://www.livingdesignsfurniture.com/wp-content/uploads/2022/03/shutterstock_1929872735-1.webp",
        "https://cdn.apartmenttherapy.info/image/upload/v1554152001/at/house%20tours%20stock%20archive/0564e10300fe7d66cce13cf77b48ff925acb748b.jpg"
    ]

  return (
    <View className="my-4">
      <SliderBox 
      images={slides}
      dotColor={COLORS.indigo500}
      ImageComponentStyle={{ width: '92%', borderRadius: 10 }}
      autoplay
      autoplayInterval={10000}
      circleLoop
      />
    </View>
  )
}

export default Carousel