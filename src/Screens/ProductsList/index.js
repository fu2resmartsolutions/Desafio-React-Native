import React, { useEffect, useState } from 'react'; 
import { FlatList, TouchableWithoutFeedback, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { 
    ProductOverview, 
    ProductImage, 
    ProductFooter, 
    ProductTitle, 
    ProductPrice,
    ProductFavoriteButton
 } from './styles';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default function ProductsList({props}) {
    const [loading, setLoading] = useState(true);
    const productsList = useSelector(state => state.data);
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    
    async function fetchData() {
        const response = await fetch('https://raw.githubusercontent.com/fu2resmartsolutions/Desafio-React-Native/master/assets/data.json') ;
        const data = await response.json();

        // Inserindo ID em cada item, já que nosso amigo Erick Alves não o fez.
        data.forEach((item, i) => {
            item.id = i + 1;
            item.favorite = false;
            dispatch({ type: 'ADD_PRODUCTS', products: item });
        });
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, []);

    function goToProduct(product) {
        props.navigation.navigate('Product', { product, props });
    }
    
    function renderProduct(product){
       return (
            <TouchableWithoutFeedback onPress={() => goToProduct(product)}>
                <ProductOverview>
                <ProductImage source={{ uri: product.item.images[0] }}>
                    <ProductFavoriteButton onPress={() => handleFavorite(product.item.id)}>
                        {product.item.favorite &&
                            <Icon size={20} color="red" name="heart" />
                        }
                        {!product.item.favorite &&
                            <Icon size={20} color="red" name="heart-outline" />
                        }
                    </ProductFavoriteButton>
                </ProductImage>
                    <ProductFooter> 
                        <ProductTitle>{product.item.name}</ProductTitle> 
                        <ProductPrice>R$: {product.item.price}</ProductPrice>
                    </ProductFooter>
                </ProductOverview>
            </TouchableWithoutFeedback>
       )
    }

    // Vai favoritar um produto
    function handleFavorite(id){
        dispatch({ type: 'FAVORITE_PRODUCT', id });
    }

    return(
        !loading 
        ?
            <FlatList columnWrapperStyle={{ justifyContent: 'space-around' }} data={productsList} renderItem={renderProduct} keyExtractor={(item, index) => index.toString()} numColumns={2} />
        :
            <Text>Carregando...</Text>
    );    
}