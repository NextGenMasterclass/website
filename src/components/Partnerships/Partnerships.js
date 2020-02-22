import React from 'react';
import './Partnerships.scss';
import { partnerships } from '../../data/partnerships';

const Partnerships = () => {
	const partners = partnerships.map(partnership => (
		<img alt={partnership.name} src={partnership.image} />
	));
	return (
		<main className='Partnerships'>
			<h2>Partnerships(?)</h2>
			<section className='partnerships-container'>{partners}</section>
		</main>
	);
};

export default Partnerships;
