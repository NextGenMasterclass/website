import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import AboutMe from '../AboutMe/AboutMe';
import Partnerships from '../Partnerships/Partnerships';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';

const App = () => {
	return (
		<>
			<main name='Home'>
				<NavigationBar />
				<Home />
			</main>
			<AboutMe />
			<Projects />
			<Partnerships />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
