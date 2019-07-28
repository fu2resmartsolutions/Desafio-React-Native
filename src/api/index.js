const TIMEOUT = 100;

let PRODUCTS = require('./data.json').map((p, i) => ({id: i, ...p}));

export function getProducts(cb) {
	setTimeout(() => cb([...PRODUCTS]), TIMEOUT);
}

export function toggleFavorite(productId, cb) {
	setTimeout(() => {
		let product = PRODUCTS.find(p => p.id === productId);
		product.isFavorite = !product.isFavorite;
		cb({...product});
	}, TIMEOUT);
}
