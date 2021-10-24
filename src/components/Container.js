import React, { useState } from "react";

import styles from './styles/Container.module.css';

import Game from './Game';
import GameOver from "./GameOver";


function Container() {
    // state for managing gameOver condition
    const [gameOver, setgameOver] = useState(false);
    // function for retrieving gameOver state from the Game.js module
    const checkGameOver = (gameOver) => {
        if (gameOver) {
            setgameOver(true);
        }
    }

    // rendering of Game module and conditional rendering of gameOver text
    return (
        <div className={styles.container}>
            {gameOver ? <GameOver /> :
                <div></div>
            }
            <Game checkGameOver={checkGameOver} />
        </div>
    )
};

export default Container;