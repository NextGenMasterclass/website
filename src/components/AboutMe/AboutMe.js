import React from 'react';
import './AboutMe.scss';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
	return (
		<main className='AboutMe' name='AboutMe'>
			<Fade cascade>
				<Fade bottom></Fade>
				<section className='about-box'>
					<section className='about-description'>
						<h2>
							<span>01. </span>Wat we doen
						</h2>
						<p>
							Ons platform biedt een reeks masterclasses, georganiseerd door
							experts in het veld. Het doel van de serie is een peer-to-peer
							overdracht van één generatie naar de andere. Het platform is
							bedoeld als aanvulling op bestaande infrastructuren.
						</p>
						<p className='sub-header'>Onze missie is talent ontwikkeling:</p>
						<p className='quote'>
							We geloven dat huidige kampioenen en leiders belangrijke leraren
							zijn voor jongere generaties, om ze gepassioneerd op de fiets te
							krijgen, en te houden. Door talent op een leuke manier de kneepjes
							van het vak leren, op een zowel gepassioneerde als ongelimiteerde
							manier. We willen hen bewapenen bij het bereiken hun doelen, door
							kennis te delen, vaardigheden te ontwikkelen en te vertellen het
							volledige verhaal: winnen en verliezen.
						</p>
						<br />
						<p className='sub-header'>Voor wie?</p>
						<p>
							Onze doelgroep is 15-19 jaar jonge talenten. Ouders zijn ook
							welkom! We vragen van deelnemers dat ze regionaal of nationaal
							competitief zijn, om een hoge kwaliteit van training te kunnen
							garanderen.
							<br />
							Deelname op uitnodiging. Per masterclass houden we circa 20-30
							deelnemers aan.
						</p>
						<p className='sub-header'>Hoe ziet een masterclass eruit?</p>
						<p>
							Weg met tradities, regels of beperkingen, we willen lichaam en
							geest uitdagen! Onze trainingen zijn avontuurlijk en snel ter
							zake. We bieden geconcentreerde knowhow in twee vormen aan: a{' '}
							<span style={{ color: '#64ffda', fontWeight: 'bold' }}>
								Training Series
							</span>{' '}
							and a{' '}
							<span style={{ color: '#64ffda', fontWeight: 'bold' }}>
								themed Q&amp;A Masterclass
							</span>
						</p>
						<p
							className='sub-header'
							style={{ color: '#64ffda', fontWeight: 'bold' }}>
							Training series
						</p>
						<p>
							We starten in 2020 met een track series, met focus op Olympische
							onderdelen. Zie kalender voor details.
						</p>
						<p
							className='sub-header'
							style={{ color: '#64ffda', fontWeight: 'bold' }}>
							Themed Q&amp;A Masterclass; ask the expert
						</p>
						<p>
							Een geconcentreerde dosis informatie over één bepaald onderwerp.
							De setting is informeel, waarbij deelnemers elke vraag kunnen
							stellen aan onze sprekers. We vragen vooraf relevante content uit,
							dus we zorgen voor een agenda met gegarandeerd vuurwerk. De sessie
							begint met een informatieve intro, vervolgens een Q&amp;A met de
							gastheer en eindigen met een vrije vuur van vragen.
						</p>
					</section>
				</section>
			</Fade>
		</main>
	);
};

export default AboutMe;
