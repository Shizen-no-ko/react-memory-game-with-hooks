import React, {useState} from "react";

import styles from './styles/Container.module.css';

import Game from './Game';
import GameOver from "./GameOver";



function Container() {

    const [gameOver, setgameOver] = useState(false); 

    const checkGameOver = (gameOver)=> {
        if(gameOver){
            setgameOver(true);
        }
    }

    return (
        <div className={styles.container}>
        {gameOver ? <GameOver/> :
        <div></div>
    }  
        <Game checkGameOver={checkGameOver} />   
        </div>
    )
};

export default Container;