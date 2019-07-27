import React from 'react';
import { ProductTitle } from './styles';
import Carousel from 'react-native-snap-carousel';

function  _renderItem ({item, index}) {
   return (
       <View style={styles.slide}>
           <Text style={styles.title}>{ item.title }</Text>
       </View>
   );
}

function ProductCarousel() {
   return(
     <ProductTitle />
   );
};

export default ProductCarousel;