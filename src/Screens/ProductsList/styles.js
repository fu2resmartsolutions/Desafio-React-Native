import styled from 'styled-components/native';

export const ProductOverview =  styled.View`
    margin: 12px;
    display: flex;
    align-items: center;
    width: 150px;
`;

export const ProductImage = styled.ImageBackground`
    align-self: center;
    width: 150px;
    height: 140px;
`;

export const ProductFooter = styled.View`
    width: 150px;
    background: #EDEDED;
    padding: 15px;
    align-items: center;
`;

export const ProductTitle = styled.Text`
    color: #3E3E3E;
    font-size: 15px;
`;

export const ProductPrice = styled.Text`
    color: #E87410;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    align-self: flex-start;
`;

export const ProductFavoriteButton = styled.TouchableOpacity`
    background: white; 
    align-self: flex-end;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin: 5px;
`;