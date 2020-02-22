import React from 'react';
import './ProjectCard.scss';
import Fade from 'react-reveal/Fade';

const ProjectCard = project => {
	const {
		title,
		description,
		deployLink,
		people,
		location,
		date,
		points,
		dialog
	} = project;
	return (
		<Fade duration={500}>
			<div className='ProjectCard'>
				<section className='card-text'>
					<h3>
						<a href={deployLink} target='_blank' rel='noopener noreferrer'>
							<span>{title}</span>{' '}
						</a>
						<p>{date}</p>
						<p>{location}</p>
					</h3>
					<p className='overlap'>
						<span>{people}</span>
					</p>
					{description && <p className='small'>{description}</p>}
					<ul>
						{points.map((point, index) => {
							return (
								<li key={index}>
									<span>▹</span>
									{point}
								</li>
							);
						})}
					</ul>
					{dialog && (
						<>
							<h5>Dialoog:</h5>
							<p className='overlap space'>{dialog}</p>
						</>
					)}
					{deployLink ? (
						<a
							className='button-join'
							href={deployLink}
							target='_blank'
							rel='nofollow noopener noreferrer'
							aria-label='External Link'>
							<div className='github-hyperlinks'>
								<div>Sign up for Masterclass</div>
							</div>
						</a>
					) : (
						<div className='disable'>
							<div className='github-hyperlinks'>
								<div>Registration Link Coming Soon</div>
							</div>
						</div>
					)}
				</section>
			</div>
		</Fade>
	);
};

export default ProjectCard;
