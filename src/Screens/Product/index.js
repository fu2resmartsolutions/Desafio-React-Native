import React, { useRef, useState } from 'react';
import { 
    ProductTitle, 
    ProductPrice, 
    ProductDetails, 
    ProductContainer, 
    CarouselContainer,
    ProductBarContainer,
    ProductBar,
    ButtonFavorite
} from './styles';
import { ProductCarousel } from '../../Components/index';
import { ScrollView, Text } from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function Product(props) {
    const { item } = props.navigation.state.params.product;
    const scrollRef = useRef(null);
    const dispatch = useDispatch();
    const [itemState, setItem] = useState(item);

    function favoriteProduct(id){
        dispatch({ type: 'FAVORITE_PRODUCT', id }); // Disparando ao redux
        setItem({...item, favorite: true});
    }

   

    function renderViewMore(onPress){
        return(
            <ProductBarContainer>
                <ProductBar />
                    <Text style={{ fontWeight: 'bold',  alignSelf: 'center', textAlign: 'center', color: '#E87410' }} onPress={onPress}>Ver mais</Text>
                <ProductBar />
            </ProductBarContainer>
        )
    }

    function renderViewLess(onPress){
        return(
            <ProductBarContainer>
                <ProductBar />
                    <Text style={{ fontWeight: 'bold',  alignSelf: 'center', textAlign: 'center', color: '#E87410' }} onPress={onPress}>Ver menos</Text>
                <ProductBar />
            </ProductBarContainer>
        )
    }

    // function onExpand() {
    //     console.log(scrollRef);
    //     console.log(scrollRef.current.scrollTo())
    // }

    // function onColapse() {
    //     console.warn('fechou');
    // }
    console.log(itemState)
    return (
        <ScrollView ref={scrollRef} style={{ flex: 1}}>
            <CarouselContainer>
                <ProductCarousel images={itemState.images} />
            </CarouselContainer>
            <ButtonFavorite onPress={() => favoriteProduct(itemState.id)}>
                {itemState.favorite
                    ?
                        <Icon size={20} color="red" name="heart" />
                    :
                        <Icon size={20} color="red" name="heart-outline" /> 
                }
            </ButtonFavorite>
            <ProductContainer>
                <ProductTitle>{itemState.name}</ProductTitle>
                <ProductPrice>R$ {itemState.price}</ProductPrice>
                <ViewMoreText
                    numberOfLines={10}
                    renderViewMore={renderViewMore}
                    renderViewLess={renderViewLess}
                    // afterExpand={() => onExpand()}
                    // afterCollapse={() => onColapse()}
                >
                    <ProductDetails>{itemState.description}</ProductDetails>
                </ViewMoreText>
            </ProductContainer>
        </ScrollView>
    )
}


export default Product;