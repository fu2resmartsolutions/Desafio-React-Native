import React, { useState } from 'react';
import { View, Image, ScrollView, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/product-actions';
import FavoriteButton from './favorite-button';
import Slideshow from './slideshow';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

function ProductPage(props)
{
	let {product, navigation, toggleFavorite} = props;
	let [canSeeMore, setCanSeeMore] = useState(false);

	let goBack = () => navigation.goBack();
	let price = 'R$ ' + product.price;

	let productInfo = (
		<View>
			<Text style={styles.productName}>{product.name}</Text>
			<Text style={styles.productPrice}>{price}</Text>
			<Text style={styles.productDescription}>{product.description}</Text>
		</View>
	)

	return (
		<View style={styles.container}>

			<View style={styles.slideshowContainer}>
				<Slideshow
					images={product.images} 
					height={250} />

				<Icon
					name="arrow-back"
					color='#555'
					underlayColor='transparent'
					containerStyle={styles.goBackButton}
					onPress={goBack}/>
			</View>
			
			<View style={{flex: 1}}>
				<FavoriteButton
					style={styles.favoriteButton}
					active={product.isFavorite} 
					onToggle={() => toggleFavorite(product.id)}/>

				{!canSeeMore ? 
					<View style={styles.descriptionContainer}>
						<View style={styles.description()}>
							{productInfo}
		
							<LinearGradient style={styles.descriptionBottomGradient} colors={['transparent', 'white']}>
							</LinearGradient>
						</View>

						<TouchableOpacity style={styles.seeMoreContainer} onPress={() => setCanSeeMore(!canSeeMore)}>
							<View style={styles.line}></View>
							<Text style={styles.seeMoreText}>Ver mais</Text>
							<View style={styles.line}></View>
						</TouchableOpacity>
					</View>
				:
					<ScrollView style={styles.description({padding: 40, paddingBottom: 0})}>
						{productInfo}
					</ScrollView>
				}
			</View>

		</View>
	);
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		top: 0, 
		bottom: 0
	},
	slideshowContainer: {
		shadowColor: '#000',
		shadowOffset: {height: 20},
		shadowOpacity: 1,
		elevation: 5,
		backgroundColor: 'white',
	},
	goBackButton: {
		position: 'absolute',
		top: 20,
		left: 20,
		zIndex: 15,
	},
	favoriteButton: {
		position: 'absolute',
		right: 10,
		top: -30,
		zIndex: 15
	},
	descriptionContainer: {
		flex: 1,
		padding: 40,
	},
	description: (style) => ({
		flex: 1,
		overflow: 'hidden',
		...style,
	}),
	descriptionBottomGradient: {
		position: 'absolute',
		height: 100,
		bottom: 0,
		left: 0,
		right: 0,
	},
	productName: {
		color: '#4b4b4b',
		fontSize: 24
	},
	productPrice: {
		color: '#00a74d',
		fontSize: 32,
		fontWeight: 'bold'
	},
	productDescription: {
		color: '#4b4b4b',
	},
	seeMoreContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		height: 20,
	},
	seeMoreText: {
		flex: 1,
		fontWeight: 'bold',
		color: '#e87410',
		justifyContent: 'center',
		textAlign: 'center',
	},
	line: {
		flex: 1,
		backgroundColor: '#e87410',
		height: 1,
		marginTop: 10
	}
});

let map = (state, {navigation}) => {
	let productId = navigation.getParam('productId');
	let product = state.find(p => p.id == productId);
	return {product};
}

export default connect(map, {toggleFavorite})(ProductPage);
