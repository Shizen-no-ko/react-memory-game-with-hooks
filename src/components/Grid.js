import React, {useState, useEffect} from "react";
import Columns from "./Columns";


function Grid(props) {
    const [gameState, setGameState] = useState({cardsTurned:0, firstTurned: null, firstKey: null, resetCards: false});

    const clearReset = (bool) => {
        if(bool){
            setGameState({...gameState, resetCards:false});
        }
    }

    const getDataFromTile = (cardType, cardNumber) => {
        if(gameState.cardsTurned === 0 && !gameState.resetCards){
            setGameState({...gameState, cardsTurned: gameState.cardsTurned + 1, firstTurned: cardType, firstKey: cardNumber});
        };
        if(gameState.cardsTurned === 1 && !gameState.resetCards){
            if(gameState.firstTurned !== cardType){
                console.log("NOT A MATCH");
                setGameState({...gameState, cardsTurned: 0,  firstTurned: null, firstKey: null, resetCards: true});
                
            } else {
                console.log("IT'S A MATCH")
            }
        };   
    };

    useEffect(() => {
        console.log("Cards Turned " + gameState.cardsTurned);
        console.log("First Card Type = " + gameState.firstTurned);
        console.log("RESET CARDS STATE" + gameState.resetCards); 
    });  

    return (
        <div>
            <Columns rows={props.rows} turned={gameState.cardsTurned} getDataFromTile={getDataFromTile} reset={gameState.resetCards} clearReset={clearReset}/>
        </div>
    )
};

export default Grid;