import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underlined from '../../assets/underlined.svg'
import toggle from '../../assets/toggle.svg'
import closed from '../../assets/closed.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    const [menu, setMenu] = useState('home')
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
                <AnchorLink className='anchor-link' >
                    <p onClick={() => setMenu('home')}>Menu</p>
                </AnchorLink>
                {menu === 'home' && <img src={underlined} alt="" />}
            </li>

            <li>
            <AnchorLink className='anchor-link' offset={50} href='#about'>
                <p onClick={() => setMenu('about')}>About Me</p>
            </AnchorLink>
            {menu === 'about' && <img src={underlined} alt="" />}
            </li>

            <li>
            <AnchorLink className='anchor-link' offset={50} href='#work'>
                <p onClick={() => setMenu('work')}>Portfolio</p>
            </AnchorLink>
            {menu === 'work' && <img src={underlined} alt="" />}
            </li>

            <li>
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <p onClick={() => setMenu('contact')}>Contact</p>
            </AnchorLink>
            {menu === 'contact' && <img src={underlined} alt="" />}
            </li>
        </ul>

            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    <p onClick={() => setMenu('contact')}>Connect With Me</p>
                </AnchorLink>
            </div>
        </div>
    )
}

export default Navbar
