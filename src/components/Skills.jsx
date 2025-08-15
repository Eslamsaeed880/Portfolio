import React from 'react';
import AutoScroller from './AutoScroller';

export default function Skills({ tool, Title }) {
    return (
        <div className="skill">
            <h3>{Title}</h3>
            <AutoScroller>
                {tool.map(item => (
                    <img key={item.alt} alt={item.alt} src={item.src} />
                ))}
            </AutoScroller>
        </div>
    );
}