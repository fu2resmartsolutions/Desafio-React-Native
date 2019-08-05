import React from 'react';
import { 
    ProductTitle, 
    ProductPrice, 
    ProductDetails, 
    ProductContainer, 
    CarouselContainer,
    ProductBarContainer,
    ProductBar
} from './styles';
import { ProductCarousel } from '../../Components/index';
import { ScrollView, Dimensions, Text } from 'react-native';
import ViewMoreText from 'react-native-view-more-text';


function Product(props) {
    const { height } = Dimensions.get('window');
    const { item } = props.navigation.state.params.product;

    function renderViewMore(onPress){
        return(
            <ProductBarContainer>
                <ProductBar />
                    <Text style={{ alignSelf: 'center', textAlign: 'center', color: '#E87410' }} onPress={onPress}>Ver mais</Text>
                <ProductBar />
            </ProductBarContainer>
        )
      }

      function renderViewLess(onPress){
        return(
            <ProductBarContainer>
                <ProductBar />
                    <Text style={{ alignSelf: 'center', textAlign: 'center', color: '#E87410' }} onPress={onPress}>Ver menos</Text>
                <ProductBar />
            </ProductBarContainer>
        )
      }

    return (
        <ScrollView>
            <CarouselContainer>
                <ProductCarousel images={item.images} />
            </CarouselContainer>
            <ProductContainer>
                <ProductTitle>{item.name}{item.favorite ? <Text>(Favorito)</Text> : null}</ProductTitle>
                <ProductPrice>R$ {item.price}</ProductPrice>
                <ViewMoreText
                    numberOfLines={10}
                    renderViewMore={renderViewMore}
                    renderViewLess={renderViewLess}
                >
                    <ProductDetails>{item.description}</ProductDetails>
                </ViewMoreText>
            </ProductContainer>
        </ScrollView>
    )

   
}


export default Product;