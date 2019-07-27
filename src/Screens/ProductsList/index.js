import React, { useEffect, useState } from 'react'; 
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function ProductsList() {
    const [products, setProducts] = useState([]);

    // O segundo parâmetro do useEffects é como se fosse um listener que ao 
    // atualizar a variável, o useEffect é trigado. 
    useEffect(async () => {
        const response = await fetch('https://raw.githubusercontent.com/fu2resmartsolutions/Desafio-React-Native/master/assets/data.json') ;
        const data = await response.json();
        
        setProducts(data);
    }, []);
    
    function renderProduct(product){
       return (
        <View>
            <Text>{product.item.name}</Text>
            <TouchableOpacity><Text>Favorite</Text></TouchableOpacity>
        </View>
       )
    }

    return(
        <FlatList data={products} renderItem={renderProduct} keyExtractor={(item, index) => index.toString()} numColumns={2} />
    );    
}