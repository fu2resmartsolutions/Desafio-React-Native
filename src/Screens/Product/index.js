import React from 'react';
import { 
    ProductTitle, 
    ProductPrice, 
    ProductDetails, 
    ProductContainer, 
    ProductBar,
    SeeMoreButton, 
    SeeMoreButtonText,
    ProductBarContainer
} from './styles';
import { ProductCarousel } from '../../Components/index';
import { ScrollView, Dimensions } from 'react-native';
const { height } = Dimensions;


function Product(props) {
    const { navigation } = props;
    const product = navigation.getParam('product');
    console.log(product);
    return (
        <ScrollView > 
            <ProductCarousel />
            <ProductContainer>
                <ProductTitle>{product.Title}</ProductTitle>
                <ProductPrice>R$15,00</ProductPrice>
                <ProductDetails>Esse lindo Refrigerador Cycle Branco, torna sua cozinha funcional e elegante. </ProductDetails>
                <ProductDetails>Prático e moderno possui selo procel, ou seja, é mais econômico, colabora com o meio ambiente e com o seu bolso, o freezer possui a função Defrost que descongela automáticamente sem que seja necessário desliga-lo e fazer bagunça. Além disso, você desfruta de diversas funções inteligentes que otimizam seu tempo apertado e corrido. Mais praticidade e rapidez no dia-a-dia. Com um belo design Integrado, o puxador é embutido com a porta do refrigerador, tornando-o mais moderno, discreto e funcional e liberando mais espaço na cozinha. Tecnologia, conforto e qualidade do começo ao fim!</ProductDetails>
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