import React from 'react';
import './App.scss';
import Fade from 'react-reveal/Fade';
import NavigationBar from '../NavigationBar/NavigationBar';
import AboutMe from '../AboutMe/AboutMe';
import Socials from '../Socials/Socials';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Work from '../Work/Work';
import jobs from '../../data/jobs';

const App = () => {
	return (
		<>
			<main name='Home'>
				<NavigationBar />
				<Fade cascade delay={600}>
					<section className='title-section'>
						<p className='introduction'>Hello! ¡Hola! My name is</p>
						<h1>Edwin Del Bosque.</h1>
						<h1 className='sub-header-title'>Building things for the web.</h1>
						<p className='description-title'>
							I'm a{' '}
							<span>
								<b>Front-End Engineer</b>
							</span>{' '}
							based in Denver, CO specialized in building (and occasionally
							designing), high-quality websites and applications.
						</p>
						<div>
							<Fade bottom cascade delay={800}>
								<a href='mailto:edwinbosq@gmail.com' className='button-link'>
									<button className='contact-button'>Get In Touch</button>
								</a>
								<a
									href='https://drive.google.com/file/d/1vEM8J6iY6GSkeWwI75u4RKJkmavw-XmO/view?usp=sharing'
									target='_blank'
									rel='noopener noreferrer'
									className='button-link'>
									<button className='contact-button'>Resume</button>
								</a>
							</Fade>
						</div>
					</section>
				</Fade>
				<div className='orb'></div>
			</main>
			<AboutMe />
			<Projects />
			<Work data={jobs} />
			<Contact />
			<Socials />
			<Footer />
		</>
	);
};

export default App;
