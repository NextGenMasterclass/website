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
						We inspire talent and arm them with expert knowledge and skill by
						direct transfer of knowhow from one generation to another.
					</p>
					<div>
						<Fade bottom cascade delay={800}>
							<a href='mailto:edwinbosq@gmail.com' className='button-link'>
								<Link
									to='Projects'
									spy={true}
									smooth={true}
									offset={0}
									ignoreCancelEvents={true}
									duration={1200}>
									<button className='contact-button'>Check Events</button>
								</Link>
							</a>
						</Fade>
					</div>
				</section>
			</Fade>
			<div className='orb'></div>
		</>
	);
};

export default Home;
