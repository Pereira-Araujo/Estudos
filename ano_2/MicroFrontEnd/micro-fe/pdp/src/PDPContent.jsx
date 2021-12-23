import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProductById, currency } from 'home/products';

export default function PDPContent() {
	const {id} = useParams();
	const [ product, setProduct ] = useState(null);

	useEffect(
		() => {
			if (id) {
				getProductById(id).then((product) => {
					setProduct(product);
				});
			} else {
				setProduct(null);
			}
		},
		[ id ]
	);

	if (!product) return null;

	return (
		<main className="grid grid-cols-2 gap-5">
			<section>
				<img src={product.image} alt={product.name} />
			</section>
			<div>
				<section className="flex">
					<h1 className="font-bold text-3x1 flex-grow">{product.name}</h1>

					<article className="font-bold text-3x1 flex-end">{currency.format(product.price)}</article>
				</section>
				<article className="mt-10">{product.description}</article>
				<article className="mt-10">{product.longDescription}</article>
			</div>
		</main>
	);
}
