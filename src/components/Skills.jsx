import React from 'react';

export default function Skills({ tool, Title }) {
    const skillContent = <div className="media-scroller">
                    {tool.map(item => (
                        <img key={item.alt} alt={item.alt} src={item.src} />
                    ))}
                </div>

    return (
        <>
            <h3>{Title}</h3>
            <div className="skill">
                {skillContent}
                {skillContent}
            </div>
        </>
    );
}