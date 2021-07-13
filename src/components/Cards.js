import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id='p' className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/IMG_5.jpeg'
              text='WEB SCRAPER: Collaborated with a team to make a webscraper that uses 
              http request to send and recieve json text to an api that translates 
              the text.' 
              label='Javscript, Axios, Node.js, Express.js'
              path='https://jamesweimoseley.github.io/web_scraper_GUI/'
            />
            
            {/* </ul>
            <ul className='cards__items'> */}
            <CardItem
              src='images/narkman.png'
              text='GOLF ACADEMY WEBSITE: a golf website built for a Southern California Golf Academy.  
              The website is built using HBS(handlebars), node.js, express server, MongoDB, 
              and a Twilio plugin.'
              label='HBS, CSS, Node.js, NoSQL, Express'
              path='http://narkmangolf.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/minecraft.png'
              text='BUKKIT PLUGINS: Plugins for Minecraft Java. Uses the 
              open source Bukkit API and Spigot Servers. All files complied as a JAR file.'
              label='Java SE 9, Bukkit, Spigot'
              path='https://github.com/JamesWeiMoseley/bukkitplugins'
            />
            {/* </ul>
            <ul className='cards__items'> */}
            <CardItem
              src='images/uqueue.jpeg'
              text='UQUEUE HACKATHON SUBMISSION: A digital queuing application.
              A submission for BeaverHacks Summer 2020 Hackathon.'
              label='HandleBars, Bootstrap, Twilio, Javascript'
              path= 'https://devpost.com/software/uqueue'
            />
            <CardItem
              src='images/sudoku_pic.png'
              text='SUDOKU INTERACTIVE GUI: the classic sudoku puzzle game. The application is written 
              in python3 using pygames for the GUI. Go ahead and try it!'
              label='Python3, Pygames'
              path='sudoku'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;