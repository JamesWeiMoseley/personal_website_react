import React from 'react'
import '../../App.css'



export default function Contact() {
    return (
        <div className='contact'>
        <h1>Contact Me</h1>
        <div className='contact__wrapper'>
        <div className='contact__container'>
            
            <ul>
            <p>Feel free to get contact me anytime </p>
            <br></br>
            <a className='sand' href='https://www.linkedin.com/in/james-moseley/'>
                LinkedIn <i className='fab fa-linkedin' /><br></br><br></br>
            </a>
            <a className='sand' href="https://github.com/JamesWeiMoseley/">
                                Github <i className='fab fa-github'/>
                            </a><br></br><br></br>
            <a className='email'>james.wei.moseley@gmail.com</a>
            </ul><br></br>
            
            </div>
            
       
            
        </div>
    </div>
    );
}
