import styled from 'styled-components/native';

export const ProductTitle = styled.Text`
    font-size: 20px;
    color: #4B4B4B;
`;

export const ProductPrice = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #00A74D;
    margin: 10px 0 10px 0;
`;

export const ProductDetails = styled.Text`
    font-size: 15px;
    color: #4B4B4B;
    margin: 10px 0 10px 0;
    align-self: flex-start;
`;

export const ProductContainer = styled.View`
    margin: 20px 40px 20px 40px;
`;

export const ProductBar = styled.View`
    border-bottom-color: #E87410;
    border-bottom-width: 1px;
    width: 100px;
    margin-bottom: 10px;
`;

export const ProductBarContainer = styled.View`
    margin-top: 10px;
    justify-content: space-around;
    flex-direction: row;
`;

export const SeeMoreButton = styled.TouchableOpacity`

`;

export const SeeMoreButtonText = styled.Text`
    color: #E87410;
    margin: 0 5px 0 5px;
`;

export const CarouselContainer = styled.View`
    align-items: center; 
    justify-content: center;
    padding: 10px 0 20px 0;
    border-bottom-color: #9D9D9D;
    border-bottom-width: 1px;
`;

export const ButtonFavorite = styled.TouchableOpacity`
    position:absolute;
    background: white; 
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border-width: 1;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 1;
    margin: 210px 50px;  /* 215 pois é o tamanho do componente de cima */
    align-items: center;
    justify-content: center;
`;