import React, { useEffect, useState } from 'react'; 
import { FlatList, TouchableWithoutFeedback, Text } from 'react-native';
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
    const [products, setProducts] = useState([]);
    console.log(props)
    async function fetchData() {
        const response = await fetch('https://raw.githubusercontent.com/fu2resmartsolutions/Desafio-React-Native/master/assets/data.json') ;
        const data = await response.json();

        // Inserindo ID em cada item, já que nosso amigo Erick Alves não o fez.
        data.forEach((item, i) => {
            item.id = i + 1;
            item.favorite = false;
        });
        setProducts(data);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    function renderProduct(product){
       return (
        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Product')}>
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
        const newProducts = products.map(product => {
            return product.id === id ? { ...product, favorite: !product.favorite } : product
        });
        setProducts(newProducts);
    }

    return(
        <FlatList columnWrapperStyle={{ justifyContent: 'space-around' }} data={products} renderItem={renderProduct} keyExtractor={(item, index) => index.toString()} numColumns={2} />
    );    
}