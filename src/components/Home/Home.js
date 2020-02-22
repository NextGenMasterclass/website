import React from 'react';
import './Home.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const Home = () => {
	const name = 'The Next Generation';

	return (
		<>
			<Fade cascade delay={600}>
				<section className='title-section'>
					<p className='introduction'></p>
					<h1>{name}.</h1>
					<h1 className='sub-header-title'>Masterclasses on the bike.</h1>
					<p className='description-title'>
						We inspireren talent en bewapenen ze met kennis en kunde van
						experts. Een directe transfer van de ene generatie op de andere.
					</p>
					<div>
						<Fade bottom cascade delay={800}>
							<Link
								to='Projects'
								spy={true}
								smooth={true}
								offset={0}
								ignoreCancelEvents={true}
								duration={1200}>
								<button className='contact-button button-link'>
									Check Events
								</button>
							</Link>
						</Fade>
					</div>
				</section>
			</Fade>
			<div className='orb'></div>
		</>
	);
};

export default Home;
