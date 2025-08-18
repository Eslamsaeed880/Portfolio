import React from 'react';
import { useState, useEffect } from 'react';
import MENU_ICON from '../../public/menu.svg';
import CLOSE from '../../public/close.svg'

export default function Nav() {
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    function handleOpenMenu() {
        setIsOpen(prev => !prev);
    }

    useEffect(() => {
        if(isOpen && width <= 810) {
            document.getElementsByClassName('main-blur')[0].classList.add('body-blur');
        } else {
            document.getElementsByClassName('main-blur')[0].classList.remove('body-blur');
        }

        return () => {
            document.body.classList.remove('body-blur');
        };
    }, [isOpen, width]);

    return (
        <>
            <header>
            <div className="logo"><a href="#home">Eslam Saeed <span className='highlight'>Portfolio</span></a></div>
            {
                width > 810 &&
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            }

            {width <= 810 && (
                <div className="hamburger" onClick={handleOpenMenu}>
                    <img src={isOpen ? CLOSE : MENU_ICON} alt="Menu" />
                </div>
            )}
        </header>
        {isOpen && width <= 810 && (
            <nav>
                <ul>
                    <li onClick = {handleOpenMenu}><a href="#home">Home</a></li>
                    <li onClick={handleOpenMenu}><a href="#about">About</a></li>
                    <li onClick={handleOpenMenu}><a href="#skills">Skills</a></li>
                    <li onClick={handleOpenMenu}><a href="#projects">Projects</a></li>
                    <li onClick={handleOpenMenu}><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        )}
    </>
    );
}