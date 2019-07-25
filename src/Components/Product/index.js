import React from 'react';
import { ProductTitle, ProductPrice, ProductDetails } from './styles';
import { ProductCarousel } from '../index';

function Product() {
    return (
        <> 
            <ProductCarousel />
            <ProductTitle>Máquina de lavar1 Brastemp</ProductTitle>
            <ProductPrice>R$15,00</ProductPrice>
            <ProductDetails>Esse lindo Refrigerador Cycle Branco, torna sua cozinha funcional e elegante. Prático e moderno possui selo procel, ou seja, é mais econômico, colabora com o meio ambiente e com o seu bolso, o freezer possui a função Defrost que descongela automáticamente sem que seja necessário desliga-lo e fazer bagunça. Além disso, você desfruta de diversas funções inteligentes que otimizam seu tempo apertado e corrido. Mais praticidade e rapidez no dia-a-dia. Com um belo design Integrado, o puxador é embutido com a porta do refrigerador, tornando-o mais moderno, discreto e funcional e liberando mais espaço na cozinha. Tecnologia, conforto e qualidade do começo ao fim!</ProductDetails>
        </>
    )
}

export default Product;