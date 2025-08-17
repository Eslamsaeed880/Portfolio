import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
    return (
        <section className="projects" id="projects">
            <h2>Featured <span className="highlight">Projects</span></h2>
            <div className="projects-content">
                <p>Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.</p>
                <div className="project-cards">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index + 1}
                            title={project.title}
                            description={project.description}
                            photo={project.photo}
                            githubLink={project.githubLink}
                            previewLink={project.previewLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}