import React from 'react';
import './Cards.css';
import pic from '../background-images/snow.jpg'


function About() {
  return (
    <div id="about" className='about'>
      <h1>About Me</h1>
      <table> 
      <tr>
        <td className="td1">
        <img src={pic} alt="pic" className='photo'/>
        </td>
        <td className="td2">
        <p>Hello my name is James Moseley. I am a full stack engineer. 
          I live in Renton, Washington.
      </p>

      <h3>Education</h3>
      <p>
          Oregon State University class of 2022
      </p>
      <p> Computer Science</p>

      <h3>My Skills</h3>
      <p>
          Languages: Java, Python, HTML, CSS, JavaScript, C, C++, Dart
      </p>
      <p>Frameworks/Libraries: Bootstrap, Material UI, Express.js, Next.js, Redux, REACT, Flutter </p>
      <p>
      Tools: Linux, Git, node.js, Bukkit, Eclipse, VSCode, Docker, MySQL, NoSQL, Heroku
      </p>

      <h3> My Interests</h3>
      <p>
      Golf , Star Wars ,  Dogs , Boba , 
      Traveling (currently planning for 2021 Hawaii trip – recommendations welcome!)</p>
      <p> and the Seattle Seahawks <i className='fas fa-football-ball'/>
      </p>

      <h3>Contact</h3>
      <br></br>
      <a className='email'>james.wei.moseley@gmail.com</a>
        </td>
      </tr>

      </table>    
      
      </div>
  );
}

export default About;