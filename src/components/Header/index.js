import React, { useState, useEffect } from 'react';
import './header.scss';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 250) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header${isScrolled ? ' header-scroll' : ''}`}>
            <nav className={`nav${isScrolled ? ' nav-mov' : ''}`}>
                <a href='#home'>Home</a>
                <a href='#sobre'>Sobre</a>
                <a href='#projetos'>Projetos</a>
            </nav>
            <nav className={`nav-redes${isScrolled ? ' nav-show' : ''}`}>
                <a target='blank' href='https://www.linkedin.com/in/ryan-gripp-da-silva-b430142b8/'><i class="fa-brands fa-linkedin-in"></i></a>
                <a target='blank' href='https://github.com/RyanGripp'><i class="fa-brands fa-github"></i></a>
            </nav>
        </header>
    );
}

export default Header;