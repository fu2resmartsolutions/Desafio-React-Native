import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


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
    margin: 40px;
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
    margin-top: 10px;
`;