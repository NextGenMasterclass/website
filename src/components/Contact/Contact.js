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
					We would love for you to get in touch if you want to collaborate, have
					ideas or want to contribute to the network.
				</p>
				<p style={{ marginTop: '70px', color: 'darkgray', fontSize: '90%' }}>
					Please be mindful about our time, as our organization is non-profit.
				</p>
				<ContactForm />
			</main>
		</Fade>
	);
};

export default Contact;
