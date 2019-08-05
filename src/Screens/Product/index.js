import React from 'react';
import { 
    ProductTitle, 
    ProductPrice, 
    ProductDetails, 
    ProductContainer, 
    ProductBar,
    SeeMoreButton, 
    SeeMoreButtonText,
    ProductBarContainer,
    CarouselContainer
} from './styles';
import { ProductCarousel } from '../../Components/index';
import { ScrollView, Dimensions } from 'react-native';
const { height } = Dimensions;


function Product(props) {
    const { item } = props.navigation.state.params.product;
    return (
        <ScrollView>
            <CarouselContainer>
                <ProductCarousel images={item.images} />
            </CarouselContainer>
            <ProductContainer>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductPrice>R$ {item.price}</ProductPrice>
                <ProductDetails>{item.description}</ProductDetails>
                <ProductBarContainer height={height}>
                    <ProductBar/>
                    <SeeMoreButton>
                        <SeeMoreButtonText>Ver mais</SeeMoreButtonText>
                    </SeeMoreButton>
                    <ProductBar/>
                </ProductBarContainer>
            </ProductContainer>
        </ScrollView>
    )
}

export default Product;