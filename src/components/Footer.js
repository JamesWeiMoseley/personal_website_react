import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
       <hr />
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <HashLink to='/#top' className='social-logo'>
              <i class='fas fa-home' />
            </HashLink>
          </div>

          <small class='website-rights'>James Moseley © 2021</small>

          <div class='social-icons'> 
            <a
              class='social-icon-link github'
              href='https://github.com/JamesWeiMoseley'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>

            <a className='social-icon-link linkedin' 
            aria-label='Linkedin'
            href="https://www.linkedin.com/in/james-moseley/">
            <i class='fab fa-linkedin' /></a>

            <a
              class='social-icon-link linkedin'
              href="https://www.google.com/"
              aria-label='Linkedin'
            >
              <i class='fab fa-google' />
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;