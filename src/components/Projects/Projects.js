import React from 'react';
import './Projects.scss';
import Fade from 'react-reveal/Fade';
import projects from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
	const cards = projects.map(project => {
		return <ProjectCard key={project.id} {...project} />;
	});

	return (
		<main className='Projects'>
			<Fade bottom>
				<h2>
					<span>02. </span>Calendar - Events
				</h2>
			</Fade>
		</main>
	);
};

export default Projects;
