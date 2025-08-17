import React from 'react';

export default function Skills({ tool, Title }) {
    return (
        <>
            <h3>{Title}</h3>
            <div className="skill">
                <div className="media-scroller">
                    {tool.map(item => (
                        <img key={item.alt} alt={item.alt} src={item.src} />
                    ))}
                </div>
                <div className="media-scroller">
                    {tool.map(item => (
                        <img key={item.alt + '-copy'} alt={item.alt} src={item.src} />
                    ))}
                </div>
            </div>
        </>
    );
}