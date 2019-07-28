import React, {useState} from 'react';
import { Image, View, Animated, PanResponder, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Slideshow(props)
{
	let { images, height, style } = props;

	const SCREEN_WIDTH = Dimensions.get('window').width;
	const SWIPE_DISTANCE = 100;

	let [page, setPage] = useState(0);
	let x = page * -SCREEN_WIDTH;
	let position = new Animated.ValueXY(0, 0);
	position.setValue({x, y: 0});

	let panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove(event, gesture) {
			position.setValue({ x: x + gesture.dx, y: 0 });
		},
		onPanResponderRelease(event, gesture) {
			if (gesture.dx > SWIPE_DISTANCE && page > 0) {
				forceSwipe(1);
			} else if (gesture.dx < -SWIPE_DISTANCE && page < images.length - 1) {
				forceSwipe(-1);
			} else {
				resetPosition();
			}
		},
	});

	function forceSwipe(direction) {
		direction = direction / Math.abs(direction);
		x += SCREEN_WIDTH * direction;
		page += -direction;
		Animated.timing(position, {
			toValue: {x: x, y: 0},
			duration: 300,
		}).start(() => setPage(page));
	}

	function resetPosition() {
		Animated.spring(position, {
			toValue: {x: x, y: 0}
		}).start();
	}

	return (
		<View style={{...style}}>
			<Animated.View 
				style={{...position.getLayout()}}
				{...panResponder.panHandlers}
			>
				<View style={{flexDirection: 'row', width: '100%', height}}>
					{images.map((uri, i) => (
						<Image key={i}
							source={{uri}}
							style={{width: '100%', height}}
						/>
					))}
				</View>
			</Animated.View>

			<View style={styles.bulletList}>
				{[0, 1, 2].map(i => 
					<View key={i} style={i === page ? styles.bullet('#e87410') : styles.bullet('grey')}>
					</View>
				)}
			</View>
		</View>
	);
}

let styles = StyleSheet.create({
	bulletList: {
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'center',
		bottom: 0,
		left: 0,
		right: 0,
	},
	bullet: color => ({
		width: 10,
		height: 10,
		margin: 5,
		marginVertical: 20,
		borderRadius: 10,
		backgroundColor: color,
	}),
});

export default Slideshow;