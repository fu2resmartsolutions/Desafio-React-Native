import React, { useEffect, useState } from 'react'; 
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { 
    ProductOverview, 
    ProductImage, 
    ProductFooter, 
    ProductTitle, 
    ProductPrice,
    ProductFavoriteButton
 } from './styles';

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    
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

    // O segundo parâmetro do useEffects é como se fosse um listener que ao 
    // atualizar a variável, o useEffect é trigado, usando um array vazio, é inicializado após o componente montar
    useEffect(() => {
        fetchData();
    }, []);
    
    function renderProduct(product){
       return (
        <ProductOverview>
            <ProductImage source={{ uri: product.item.images[0] }}>
                <ProductFavoriteButton onPress={() => handleFavorite(product.item.id)}><Text>Favorite</Text></ProductFavoriteButton>
                {/* <TouchableOpacity onPress={() => handleFavorite(product.item.id)}><Text>Favorite</Text></TouchableOpacity>  */}
            </ProductImage>
            <ProductFooter> 
                <ProductTitle>{product.item.name} { product.item.favorite && <Text> (Favorito) </Text> }</ProductTitle> 
                <ProductPrice>R$: {product.item.price}</ProductPrice>
             </ProductFooter>
        </ProductOverview>
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