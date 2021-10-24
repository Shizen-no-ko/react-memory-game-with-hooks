import React, {useState} from "react";

import Columns from "./Columns";



function Grid(props) {
    // state for managing turning, matching and resetting tiles
    const [gridState, setGridState] = useState({cardsTurned:0, firstTurned: null, firstKey: null, resetCards: false, matched: [], block: false});
    const clearReset = (bool) => {
        if(bool){
         setGridState({...gridState, resetCards:false});
        }
    }
    // function for receiving data from  a clicked tile about itself,
    // and handling matching or not-matching of pairs
    const getDataFromTile = (cardType, cardNumber) => {
        // if first tile is turned, store its info in state
        if(gridState.cardsTurned === 0 && !gridState.resetCards){
         setGridState({...gridState, cardsTurned: gridState.cardsTurned + 1, firstTurned: cardType, firstKey: cardNumber});
        };
        // if second tile is turned, handle match or not match,
        // and also handle turning back of non-matched tiles,
        // or deleting of matched tiles
        if(gridState.cardsTurned === 1 && !gridState.resetCards){
            // if no match, reset own state, 
            // pass up state of play to Game.js component for handling score display 
            if(gridState.firstTurned !== cardType){
             setGridState({...gridState, cardsTurned: 0,  firstTurned: null, firstKey: null, resetCards: true});
                props.getStateOfPlay(true, false);
                // if there is a match
                // create constant array for storing previous matched tiles state
                // if there is a match and the two tiles are not already in the matched state, 
                // push into constant array
            } else {
                const tempMatch = gridState.matched
                if(gridState.matched.indexOf(gridState.firstKey) === -1){
                    tempMatch.push(gridState.firstKey);
                }
                if(gridState.matched.indexOf(cardNumber) === -1){
                    tempMatch.push(cardNumber);
                }
                // reset state, update matched state from constant array,
                // set resetCards state to instigate turning back of tiles
             setGridState({...gridState, cardsTurned: 0,  firstTurned: null, firstKey: null, matched: tempMatch, resetCards: true});
             props.getStateOfPlay(true, true);
            }
        };   
    };

    return (
        <div>
            <Columns rows={props.rows} turned={gridState.cardsTurned} matched={gridState.matched} getDataFromTile={getDataFromTile} reset={gridState.resetCards} clearReset={clearReset}/>
        </div>
    )
};

export default Grid;