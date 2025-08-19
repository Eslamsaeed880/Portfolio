import React from 'react';
import ProjectCard from './ProjectCard';
import useRevealOnScroll from '../useRevealOnScroll';

export default function Projects({ projects }) {
    const revealRef = useRevealOnScroll('translate-in');
    return (
        <div className="reveal" ref={revealRef}>
            <div id="projects"></div>
            <h2>Featured <span className="highlight">Projects</span></h2>
            <section className="projects">
                <div className="projects-content">
                    <p>Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.</p>
                    <div className="project-cards">
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={index}
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
        </div>
    );
}