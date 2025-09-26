import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => setMobileMenu(!mobileMenu);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt='Logo' className='logo' />

            <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
                <li><Link to='academics' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Academics</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={toggleMenu}>Contact Us</Link></li>
            </ul>

            <img src={menu_icon} alt='menu' className='menu-icon' onClick={toggleMenu}/>
        </nav>
    );
};

export default Navbar;
