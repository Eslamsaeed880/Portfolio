import React from 'react';
import GITHUB_ICON from '../../public/github-icon.png';
import PREVIEW_ICON from '../../public/preview-icon.svg';

export default function ProjectCard({ title, description, photo }) {
    return (
        <div className="project-card">
            <img src={photo} alt="Project Screenshot" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-icons">
                <a href="#projects"><img src={GITHUB_ICON} alt="GitHub Icon" /></a>
                <a href="#projects"><img src={PREVIEW_ICON} alt="Preview Icon" /></a>
            </div>
        </div>
    );
}