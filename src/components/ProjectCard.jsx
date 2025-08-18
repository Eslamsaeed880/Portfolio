import React from 'react';

export default function ProjectCard({ title, description, photo, githubLink, previewLink }) {
    return (
        <div className="project-card">
            <img src={photo} alt="Project Screenshot" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-icons">
                <a href={githubLink}><img src={GITHUB_ICON} alt="GitHub Icon" /></a>
                {previewLink && <a href={previewLink}><img src={PREVIEW_ICON} alt="Preview Icon" /></a>}
            </div>
        </div>
    );
}