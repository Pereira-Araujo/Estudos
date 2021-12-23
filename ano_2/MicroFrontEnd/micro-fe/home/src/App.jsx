import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';

const App = () => (
	<main className="text-3xl mx-auto max-w-6xl">
		<Header />
		<section className="my-10">
			<HomeContent />
		</section>
		<Footer />
	</main>
);
ReactDOM.render(<App />, document.getElementById('app'));
