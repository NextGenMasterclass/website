import React from 'react';
import './Partnerships.scss';
import { partnerships } from '../../data/partnerships';
import Fade from 'react-reveal/Fade';

const Partnerships = () => {
	const partners = partnerships.map(partnership => {
		const { id, name, image } = partnership;
		return <img key={id} alt={name} src={image} />;
	});

	return (
		<main className='Partnerships'>
			<h2>Partnerships (?)</h2>
			<Fade bottom cascade distance={'100px'}>
				<section className='partnerships-container'>{partners}</section>
			</Fade>
		</main>
	);
};

export default Partnerships;
