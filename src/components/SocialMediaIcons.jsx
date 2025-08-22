import React from 'react';
import GITHUB_ICON from '../../public/github-icon.png';
import LINKEDIN_ICON from '../../public/linkedin-icon.svg';

export default function SocialMediaIcons() {
    return (
      <div className="icons">
        <img src={GITHUB_ICON} alt="GitHub Icon" />
        <img src={LINKEDIN_ICON} alt="LinkedIn Icon" />
      </div>
    );
}