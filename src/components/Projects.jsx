import React from 'react';
import ProjectCard from './ProjectCard';
import PROJECT_PHOTO from '../../public/project.png'

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Featured <span className="highlight">Projects</span></h2>
            <div className="projects-content">
                <p>Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.</p>
                <div className="project-cards">
                    <ProjectCard 
                        title="Project Title"
                        description="Project description goes here."
                        photo={PROJECT_PHOTO}
                    />
                    <ProjectCard 
                        title="Project Title 2"
                        description="Project description goes here."
                        photo={PROJECT_PHOTO}
                    />
                    <ProjectCard 
                        title="Project Title 3"
                        description="Project description goes here just for you kid."
                        photo={PROJECT_PHOTO}
                    />
                    <ProjectCard 
                        title="Project Title 4"
                        description="Project description goes here."
                        photo={PROJECT_PHOTO}
                    />
                    <ProjectCard 
                        title="Project Title 5"
                        description="Project description goes here."
                        photo={PROJECT_PHOTO}
                    />

                </div>
            </div>
        </section>
    );
}