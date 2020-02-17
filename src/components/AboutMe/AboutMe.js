import React from 'react';
import './AboutMe.scss';
import headshot from '../../assets/headshot.jpg';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
	return (
		<main className='AboutMe' name='AboutMe'>
			<Fade cascade>
				<Fade bottom></Fade>
				<section className='about-box'>
					<section className='about-description'>
						<h2>
							<span>01. </span>What We Do
						</h2>
						<p>
							Our platform offers a series of masterclasses hosted by experts in
							the field. The goal of the series is a direct transfer of
							knowledge and skill from one generation to another. The structure
							is peer-to-peer, where current champions and leaders contribute to
							younger generations. Our platform aims to be complementary to the
							established infrastructure of community trainers and regional
							training centers.
						</p>
						<p className='sub-header'>Our mission is talent development:</p>
						<p>
							We want to Inspire talent and teach them the ropes in a fun,
							passionate and unrestrictive way. We want to arm them in achieving
							their goals, by sharing knowledge, developing skill and tell them
							the full story: winning and losing.
						</p>
						<br />
						<br />
						<p className='sub-header'>For who?</p>
						<p>
							We work with open invitation. Our targeted group is 15-19 years
							young talents. Parents are also welcome!
						</p>
						<p className='sub-header'>How does a masterclass look like?</p>
						<p>
							We don’t like traditions, rules or restrictions, we like to open
							the legs ánd the mind! The training will be adventurous, fast
							paced and to the point. We offer concentrated knowhow in two
							forms: a{' '}
							<span style={{ color: 'pink', fontWeight: 'bold' }}>
								Training Series
							</span>{' '}
							and a themed Q&amp;A Masterclass
						</p>
						<p className='sub-header'>Training series</p>
						<p>
							We launch in 2020 with a track series, where in an Olympic year,
							we focus for this year’s masterclasses on Olympic Track races. See
							the calendar for details.
						</p>
						<p className='sub-header'>
							Themed Q&amp;A Masterclass; ask the expert
						</p>
						<p>
							An information bomb about one particular topic. In an informal
							setting, you can ask any question to one of the greats. We send
							out for questions beforehand, so we have an agenda which will be
							guaranteed firework. The session starts off with an informative
							talk, then a Q&amp;A with the host, and we end with a freefire of
							questions at will.
						</p>
					</section>
				</section>
			</Fade>
		</main>
	);
};

export default AboutMe;
