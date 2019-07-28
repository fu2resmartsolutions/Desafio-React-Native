import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ProductCard from './product-card';
import { toggleFavorite } from '../actions/product-actions';
import { Header, Icon } from 'react-native-elements';

function HomePage(props)
{
	let {products, toggleFavorite} = props;

	let productLists = [
		products.filter((v, i) => i % 2 == 1), 
		products.filter((v, i) => i % 2 == 0)
	];

	return (
		<>
			<View style={styles.header}>
				<Icon containerStyle={styles.menuIcon} name='menu' color='white' underlayColor='transparent' />
				<Text style={styles.headerTitle}>Produtos</Text>
			</View>

			<ScrollView>
				<View style={styles.container}>
					{productLists.map((products, i) => 

						<View key={i} style={styles.column}>
							{products.map(prod => 
								<ProductCard 
									key={prod.id} 
									product={prod}
									toggleFavorite={toggleFavorite}
									style={styles.productCard}/>
							)}
						</View>

					)}
				</View>
			</ScrollView>
		</>
	);
}

let styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		backgroundColor: '#e87410',
		padding: 15,
		shadowColor: "#000",
		shadowOpacity: 0.5,
		elevation: 2,
	},
	menuIcon: {
		marginRight: 10,
	},
	headerTitle: {
		color: 'white',
		fontSize: 20,
	},
	container: {
		flexDirection: 'row', 
		justifyContent: 'space-evenly',
		paddingHorizontal: 20,
		paddingTop: 30,
	},
	column: {
		flex: 1,
	},
	productCard: {
		margin: 10,
		shadowColor: "#000",
		shadowOffset: {width: 0, height: 20},
		shadowOpacity: 0.50,
		elevation: 5,
		backgroundColor: 'white'
	}
});

let map = (state) => ({
	products: state
});

export default connect(map, { toggleFavorite })(HomePage);
