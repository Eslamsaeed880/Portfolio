import React from 'react';
import GITHUB_ICON from '../../public/github-icon.png';
import LINKEDIN_ICON from '../../public/linkedin-icon.svg';

export default function SocialMediaIcons() {
    return (
      <div className="icons">
        <a href="https://github.com/Eslamsaeed880" target="_blank" rel="noopener noreferrer">
          <img src={GITHUB_ICON} alt="GitHub Icon" />
        </a>
        <a href="https://www.linkedin.com/in/eslam-saeed-359087290/" target="_blank" rel="noopener noreferrer">
          <img src={LINKEDIN_ICON} alt="LinkedIn Icon" />
        </a>
      </div>
    );
}