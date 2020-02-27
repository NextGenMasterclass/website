import React from 'react';
import './Contact.scss';
import Fade from 'react-reveal/Fade';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
	return (
		<Fade cascade>
			<main className='Contact' name='Contact'>
				<h2>
					<span>04. Contact</span>Get In Touch
				</h2>
				<p>
					Heb je ideeën voor mogelijkheden tot samenwerking of wil je bijdragen
					aan het netwerk? Neem vooral contact op!
				</p>
				<p style={{ marginTop: '70px', color: 'darkgray', fontSize: '90%' }}>
					Wees aub mindful met onze tijd,
				</p>
				<p style={{ marginTop: '50px', color: 'darkgray', fontSize: '90%' }}>
					onze organisatie is non-profit.
				</p>
				<ContactForm />
			</main>
		</Fade>
	);
};

export default Contact;
