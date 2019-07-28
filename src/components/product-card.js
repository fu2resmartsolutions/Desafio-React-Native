import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import FavoriteButton from './favorite-button';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/product-actions';

function ProductCard(props)
{
	let {product, navigation, toggleFavorite, style} = props;

	let name = product.name.length <= 18 ? product.name : product.name.substring(0, 14) + '...';
	let price = 'R$ ' + product.price;
	let imgUri = product.images[0];

	let goToProductPage = () => navigation.navigate('Product', {productId: product.id});

	return (
		<View style={styles.container(style)}>
			<FavoriteButton
				active={product.isFavorite} 
				size={0.6}
				style={styles.favoriteButton}
				onToggle={() => toggleFavorite(product.id)}/>

			<View onTouchEnd={goToProductPage}>
				<Image 
					source={{uri: imgUri}}
					style={styles.cardImage}
					/>

				<View style={styles.cardDescription}>
					<Text>{name}</Text>
					<Text style={styles.productPrice}>{price}</Text>
				</View>
			</View>
		</View>
	);
}

let styles = StyleSheet.create({
	container: style => ({
		...style
	}),
	favoriteButton: {
		position: 'absolute',
		right: 10,
		top: 10,
		zIndex: 10
	},
	cardImage: {
		width: '100%',
		height: 120
	},
	cardDescription: {
		backgroundColor: '#ededed',
		padding: 10,
	},
	productPrice: {
		color: '#e87410',
		fontWeight: 'bold',
		fontSize: 15,
	},
});

export default withNavigation(connect(() => ({}), {toggleFavorite})(ProductCard));
