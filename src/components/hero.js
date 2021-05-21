import React from 'react'
import '../App.css';
import { Button } from './Button'
import { Button2 } from './Button2'
import Button3 from './Button3';
import './hero.css';

function hero() {
    return (
        <div id="#top" className='hero-container'>
            {/* <video src="/videos/video-3.mp4" autoPlay loop muted /> */}
            <h1>Welcome to my Personal Website</h1>
            <p>Click below or just keep scrolling</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>About <i className='far fa-address-card' /></Button>
                <Button2 className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Projects <i className='fas fa-puzzle-piece' /></Button2>
                <Button3 className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Resume <i className='far fa-file' />
                </Button3>
            </div>
        </div>
    )
}

export default hero
