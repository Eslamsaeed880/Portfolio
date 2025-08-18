import React from 'react';
import LINKEDIN_ICON from '../../public/linkedin-icon.svg';
import GITHUB_ICON from '../../public/github-icon.png';

export default function Footer() {

    return (
        <footer>
            <div className="icons">
                <a href="https://www.linkedin.com/in/eslam-saeed-359087290/"><img src={LINKEDIN_ICON} alt="LinkedIn Icon" /></a>
                <a href="https://github.com/Eslamsaeed880"><img src={GITHUB_ICON} alt="GitHub Icon" /></a>

            </div>
            <p>© 2025 Eslam Saeed. All rights reserved.</p>
        </footer>
    );
}