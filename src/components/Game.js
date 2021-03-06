import React, { useState, useEffect } from "react";

import styles from "./styles/Game.module.css";


import Grid from "./Grid";
import ScoreDisplay from "./ScoreDisplay";
import Title from "./Title";


// set number of tiles in game
const gridSize = (16);
// generate random array of numbers from 0 to gridSize
var elements = [];
for (var k = 0; k < gridSize; k++) {
    elements.push(k);
};
let shuffled = elements
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
// generate rows for passing down and rendering
var row = [];
var rows = [];
for (var j = 0; j < 16; j = j + 4) {
    for (var i = j; i < j + 4; i++) {
        row.push(shuffled[i]);
    }
    rows.push(row);
    row = [];
}


function Game(props) {
    // state for handling score
    const [gameState, setGameState] = useState({ tries: 0, pairsFound: 0 });
    // function for obtaining result of turning two cards from Grid.js
    const getStateOfPlay = (tryAttempted, pairFound) => {
        if (tryAttempted && pairFound) {
            setGameState({ tries: gameState.tries + 1, pairsFound: gameState.pairsFound + 1 })
        } else if (tryAttempted) {
            setGameState({ ...gameState, tries: gameState.tries + 1 })
        }
    };


    // handle end of game
    useEffect(() => {
        if (gameState.pairsFound === gridSize / 2) {
            props.checkGameOver(true);
        }
    })

    // render components of game display
    return (
        <div className={styles.container}>
            <Title left="true" />
            <ScoreDisplay left="true" tries={gameState.tries} text="Tries Attempted" />
            <Grid rows={rows} getStateOfPlay={getStateOfPlay} />
            <ScoreDisplay tries={gameState.pairsFound} text="Pairs Found" />
            <Title />
        </div>
    )
};

export default Game;