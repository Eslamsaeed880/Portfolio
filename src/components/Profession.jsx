import React from 'react';

export default function Profession({ title, description }) {
    return (
        <li className='rainbow-outline'>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
