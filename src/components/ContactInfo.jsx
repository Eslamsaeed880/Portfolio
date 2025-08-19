import React from 'react';

export default function ContactInfo({ title, content, icon }) {
    let displayContent = content;
    
    if (title.toLowerCase() === 'email') {
        displayContent = <a href={`mailto:${content}`}>{content}</a>;
    } else if (title.toLowerCase() === 'phone') {
        displayContent = <a href={`tel:${content}`}>{content}</a>;
    }

    return (
        <div className={`${title.toLowerCase()} info-card rainbow-outline`}>
            <img src={icon} alt={`${title.toLowerCase()} icon`} />
            <h4>{title}</h4>
            <p>{displayContent}</p>
        </div>
    );
}