import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';

import Header from 'home/Header';
import Footer from 'home/Footer';
import PDPContent from './PDPContent';

const App = () => (
	<Router>
		<main className="text-3xl mx-auto max-w-6xl">
			<Header />
			<section className="my-10">
				<Switch>
					<Route path="/product/:id" component={PDPContent} />
				</Switch>
			</section>
			<Footer />
		</main>
	</Router>
);
ReactDOM.render(<App />, document.getElementById('app'));
