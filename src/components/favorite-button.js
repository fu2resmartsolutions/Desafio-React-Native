import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';

function FavoriteButton(props)
{
	let { active, onToggle, size, style } = props;
	let iconName =  active ? 'favorite' : 'favorite-border';

	return (
		<TouchableOpacity style={styles.container(size, style)} activeOpacity={1} onPress={onToggle}>
			<Icon 
				name={iconName}
				color="#f00"
				size={30 * size} />
		</TouchableOpacity>
	);
}

FavoriteButton.defaultProps = {
	size: 1,
}

let styles = StyleSheet.create({
	container: (size, style) => ({
		shadowColor: '#000',
		shadowOffset: {height: 20},
		shadowOpacity: 0.5,
		elevation: 5,
		width: 60 * size,
		height: 60 * size,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		zIndex: 13,
		...style
	})
});

export default FavoriteButton;
