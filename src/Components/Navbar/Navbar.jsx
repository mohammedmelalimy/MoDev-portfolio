import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underlined from '../../assets/underlined.svg'
import toggle from '../../assets/toggle.svg'
import closed from '../../assets/closed.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = ({ activeSection, setActiveSection }) => {
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0"; 
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-500px"; 
    };

    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <img src={toggle} alt="toggle" className='nav-mob-open' onClick={openMenu} />

            <ul ref={menuRef} className="nav-menu">
                <img src={closed} alt='closed' className='nav-mob-closed' onClick={closeMenu}/>
                
                <li>
                    <AnchorLink className="anchor-link" offset={50} href='' data-to-scrollspy-id="home">
                        <p onClick={() => { setActiveSection('home'); closeMenu(); }}>Menu</p>
                    </AnchorLink>
                    {activeSection === 'home' && <img src={underlined} alt="" />}
                </li>

                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#about' data-to-scrollspy-id="about">
                        <p onClick={() => { setActiveSection('about'); closeMenu(); }}>About Me</p>
                    </AnchorLink>
                    {activeSection === 'about' && <img src={underlined} alt="" />}
                </li>

                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#work' data-to-scrollspy-id="work">
                        <p onClick={() => { setActiveSection('work'); closeMenu(); }}>Projects</p>
                    </AnchorLink>
                    {activeSection === 'work' && <img src={underlined} alt="" />}
                </li>

                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#contact' data-to-scrollspy-id="contact">
                        <p onClick={() => { setActiveSection('contact'); closeMenu(); }}>Contact</p>
                    </AnchorLink>
                    {activeSection === 'contact' && <img src={underlined} alt="" />}
                </li>
            </ul>

            <AnchorLink className='nav-connect' offset={50} href='#contact'>
                <p onClick={() => setActiveSection('contact')}>Connect With Me</p>
            </AnchorLink>
        </div>
    );
};

export default Navbar;

