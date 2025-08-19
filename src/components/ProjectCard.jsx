import React from 'react';
import GITHUB_ICON from '../../public/github-icon.png';
import PREVIEW_ICON from '../../public/preview-icon.svg';
import BLUE_PREVIEW_ICON from '../../public/blue-preview.svg';

export default function ProjectCard({ title, description, photo, githubLink, previewLink }) {
    return (


        <div className="project-card">
            <a href={previewLink || githubLink}><img src={photo} alt="Project Screenshot" /></a>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-icons">
                <a href={githubLink}><img src={GITHUB_ICON} alt="GitHub Icon" /></a>
                {previewLink && <a href={previewLink} className="preview-link hover-underline"><img src={PREVIEW_ICON} alt="Preview Icon" /><img src={BLUE_PREVIEW_ICON} alt="Blue Preview Icon" /> <span>Preview Project</span></a>}
            </div>
        </div>
    );
}