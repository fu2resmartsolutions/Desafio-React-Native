import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Image, Text, Dimensions } from 'react-native'; 
const { width } = Dimensions.get('window');

function  _renderItem (item) {
  return (
    item ?
      <View style={{ flex: 1 }}>
        <Image source={{uri: item.item}} style={{ flex: 1, width: width / 2 , height: 200 }} />
      </View>
    :
    <Text>Carregando...</Text>
  );
}

function ProductCarousel(images) {
   return(
    <Carousel
      data={images.images}
      renderItem={_renderItem}
      sliderWidth={width}
      itemWidth={width / 2}
    />
   );
};

export default ProductCarousel;