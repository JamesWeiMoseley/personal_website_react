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
              src='images/sudoku_pic.png'
              text='Sudoku GUI Interactive Game: the classic sudoku puzzle game. The application is written 
              in python3 using pygames for the GUI. Go ahead and try it!'
              label='Python3, Pygames'
              path='/sudoku/#s_top'
            />
            {/* </ul>
            <ul className='cards__items'> */}
            <CardItem
              src='images/narkman.png'
              text='Golf Academy Website: a golf website built for a Southern California Golf Academy.  
              The website is built using HBS(handlebars), node.js, express server, MongoDB, 
              and a Twilio plugin.'
              label='HBS, CSS, Node.js, NoSQL, Express'
              path='https://narkmangolf.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/minecraft.png'
              text='Bukkit Plugins: Plugins for Minecraft Java. Uses the 
              open source Bukkit API and Spigot Servers. All files complied as a JAR file.'
              label='Java SE 9, Bukkit, Spigot'
              path='https://github.com/JamesWeiMoseley/bukkitplugins'
            />
            {/* </ul>
            <ul className='cards__items'> */}
            <CardItem
              src='images/uqueue.jpeg'
              text='uQueue Hackathon Submission: A digital queuing application.
              A submission for BeaverHacks Summer 2020 Hackathon.'
              label='HandleBars, Bootstrap, Twilio, Javascript'
              path= 'https://github.com/computerHeads/beaverhacksSum20'
            />
            <CardItem
              src='images/IMG_5.jpeg'
              text='Snake Game: classic snake game using python and the turtle module. 
              Click to play the game yourself.'
              label='Python'
              path='https://github.com/JamesWeiMoseley/SnakeGame'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;