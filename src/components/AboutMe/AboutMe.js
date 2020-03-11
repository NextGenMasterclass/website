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
							Ons platform biedt een reeks masterclasses georganiseerd door
							experts in het veld. Het doel van de serie is een overdracht van
							één generatie op de andere.
						</p>
						<p className='sub-header'>Onze missie is talent ontwikkeling.</p>
						<p className='quote'>
							''We geloven dat huidige kampioenen en experts belangrijke leraren
							kunnen zijn voor jongere generaties, om ze de kneepjes van het vak
							te leren, gepassioneerd op de fiets te krijgen en te behouden. We
							willen helpen in het bereiken van doelen, door kennis te delen,
							vaardigheden te ontwikkelen en het volledige verhaal te vertellen:
							winnen en verliezen.'' - Nick Stöpler, initiatiefnemer
						</p>
						<br />
						<p className='sub-header'>Voor wie?</p>
						<p>
							We richten ons op jonge talenten. Ouders zijn ook welkom! We
							vragen van deelnemers dat ze regionaal of nationaal competitief
							zijn, om een hoge kwaliteit van training te kunnen garanderen.
							<br />
							Per masterclass houden we circa 20-30 deelnemers aan, afhankelijk
							van de masterclass.
						</p>
						<p className='sub-header'>Hoe ziet een masterclass eruit?</p>
						<p>
							Weg met tradities, regels en beperkingen! We willen lichaam en
							geest uitdagen! Onze trainingen zijn avontuurlijk en zonder
							onnodige rompslomp. We werken met twee vormen: een{' '}
							<span style={{ color: '#64ffda', fontWeight: 'bold' }}>
								Training Series
							</span>{' '}
							en een{' '}
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
							dus we zorgen voor een agenda met interessante thema's. De sessie
							beginnen informatief, vervolgens een Q&amp;A met de gastheer en
							eindigen met vrij vuur van vragen.
						</p>
					</section>
				</section>
			</Fade>
		</main>
	);
};

export default AboutMe;
