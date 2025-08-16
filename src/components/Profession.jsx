import React from 'react';

export default function Profession({ title, description }) {
    return (
        <li>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
