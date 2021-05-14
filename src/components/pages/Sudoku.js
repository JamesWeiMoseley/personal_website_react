import React from 'react'
import '../../App.css'


export default function Sudoku() {
    return (
        <div id='s_top' className='sudoku'>
            
            <div className='sudoku__wrapper'>
            <div className='sudoku__container__1'>
            <h1>Sudoku Board Game</h1>
                <ul>
                <p>If app hasn't start, just press run.</p>
                <p> Below the game is being run in the online IDE program Replit </p><br></br>
                <p>Instructions for Sudoku Game:<br></br>
                SOLVE: simply click "solve" to solve the puzzle (Note it will not solve if the puzzle is wrong) <br></br>
                RESTART: it will start a new sudoku game based on 6 random games in grids.py<br></br>
                QUIT: exits the program</p><br></br>
                <p>You can click on any button and try for yourself to solve the Sudoku Game. 
                Keep in mind if you input wrong numbers the solver may return a "failed" result <br></br>
                Press the number 0 if you want to delete any numbers. <br></br>
                </p>
                </ul><br></br><hr></hr><br></br><br></br>
                <p>
                    Pygames is a set of Python modules designed for writing video games built on the SDL library. Pygame version 2.0.1 was used for the GUI: https://www.pygame.org/docs/
                    </p>
                    <p>All code was writting in Python3 version 3.8.5
                    </p>
                    <a className='sand' href="https://github.com/JamesWeiMoseley/Sudoku_Game_GUI">
                        Github <i className='fab fa-github'/>
                    </a>

                <p className='arrow'>Click Run <i className='fas fa-arrow-down'/></p>
                </div>
                </div> 
            
            <div className='sudoku__container'>
                
            <iframe  
                width="100%" height="780px" 
                src="https://replit.com/@jamynair/SudokuGameGUI-1?lite=true&outputonly=1">
            </iframe>
            </div>
            
        </div>
    );
}
