import React from 'react';
import AutoScroller from './AutoScroller';

export default function Skills({ tool, Title }) {
    return (
        <>
            <h3>{Title}</h3>
            <div className="skill">
                <AutoScroller>
                    {tool.map(item => (
                        <img key={item.alt} alt={item.alt} src={item.src} />
                    ))}
                </AutoScroller>
            </div>
        </>
    );
}