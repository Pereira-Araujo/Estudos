import React, { useState, useEffect } from 'react';
import { getProducts, currency } from './products';

export default function HomeContent() {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		getProducts().then(setProducts);
	}, []);

	return (
		<main className="grid grid-cols-4 gap-5">
			{products.map((product) => {
				return (
					<section key={product.id} alt={product.name}>
						<img src={product.image} alt={product.name} />
						<article className="flex">
							<p className="flex-grow font-bold">
								<a>{product.name}</a>
							</p>
							<p className="flex-end">{currency.format(product.price)}</p>
						</article>
					</section>
				);
			})}
		</main>
	);
}
