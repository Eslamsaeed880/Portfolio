import React from 'react';
import useRevealOnScroll from '../useRevealOnScroll';

export default function Skills({ tool, Title }) {
    const revealRef = useRevealOnScroll('translate-in');
    const skillContent = <div className="media-scroller">
                    {tool.map(item => (
                        <img key={item.alt} alt={item.alt} src={item.src} />
                    ))}
                </div>;

    return (
        <div className="reveal" ref={revealRef}>
            <h3>{Title}</h3>
            <div className="skill">
                {skillContent}
                {skillContent}
            </div>
        </div>
    );
}