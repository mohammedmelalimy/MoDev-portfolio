import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import closed from '../../assets/closed.svg';
import logo from '../../assets/logo.svg';
import toggle from '../../assets/toggle.svg';
import underlined from '../../assets/underlined.svg';
import './Navbar.css';

const Navbar = () => {
    const menuRef = useRef();
    const location = useLocation();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-500px";
    };

    // 🌟 Determine active nav item based on route path
    const currentPath = location.pathname; 

    return (
        <div className="navbar">

            <Link to="/" className="logo" onClick={closeMenu}>
                <img src={logo} alt="logo" />
                <p>Elalimy</p>
            </Link>

            <img src={toggle} alt="toggle" className="nav-mob-open" onClick={openMenu} />

            <ul ref={menuRef} className="nav-menu">
                <img src={closed} alt="closed" className="nav-mob-closed" onClick={closeMenu} />

                <li>
                    <Link to="/" onClick={closeMenu}>
                        <p>Menu</p>
                    </Link>
                    {currentPath === '/' && <img src={underlined} alt="active" />}
                </li>

                <li>
                    <Link to="/about" onClick={closeMenu}>
                        <p>About Me</p>
                    </Link>
                    {currentPath === '/about' && <img src={underlined} alt="active" />}
                </li>

                <li>
                    <Link to="/projects" onClick={closeMenu}>
                        <p>Projects</p>
                    </Link>
                    {currentPath === '/projects' && <img src={underlined} alt="active" />}
                </li>

                <li>
                    <Link to="/contact" onClick={closeMenu}>
                        <p>Contact</p>
                    </Link>
                    {currentPath === '/contact' && <img src={underlined} alt="active" />}
                </li>
            </ul>

            <Link to="/contact" className="nav-connect" onClick={closeMenu}>
                <p>Connect With Me</p>
            </Link>
        </div>
    );
};

export default Navbar;
