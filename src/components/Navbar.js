import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button } from './Button.js';
import './Navbar.css';
import Pdf from '../attachments/James_Moseley_resume.pdf'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <HashLink to="/#top" className="navbar-logo" onClick={closeMobileMenu}>
                        James 
                        {/* Moseley &nbsp;
                        <i className='fas fa-golf-ball'/> */}
                    </HashLink>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    {/* start of active nav bar */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <div className='x-active-navbar' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : ''}/>
                    </div>
                        </li>
                    <li className='nav-item'>
                            <HashLink to="/#top" className='nav-links' onClick={closeMobileMenu}
                            activeClass="active" spy={true} smooth={true}>
                                Home
                            </HashLink>
                        </li>
                        <li className='nav-item'>
                            <HashLink to="/#about" className='nav-links' onClick={closeMobileMenu}
                            activeClass="active" spy={true} smooth={true}>
                                About
                            </HashLink>
                        </li>
                        <li className='nav-item'>
                            <HashLink to="/#p" className='nav-links' onClick={closeMobileMenu}
                            activeClass="active" spy={true} smooth={true}>
                                Projects
                            </HashLink>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        
                        <li>
              <a
                href={Pdf}
                target='_blank'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Resume
              </a>
              
            </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
