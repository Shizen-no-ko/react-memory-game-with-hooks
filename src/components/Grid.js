import React, {useState, useEffect} from "react";
import Columns from "./Columns";


function Grid(props) {
    const [gridState, setGridState] = useState({cardsTurned:0, firstTurned: null, firstKey: null, resetCards: false, matched: [], block: false});
    const clearReset = (bool) => {
        if(bool){
         setGridState({...gridState, resetCards:false});
        }
    }
    const getDataFromTile = (cardType, cardNumber) => {
        if(gridState.cardsTurned === 0 && !gridState.resetCards){
         setGridState({...gridState, cardsTurned: gridState.cardsTurned + 1, firstTurned: cardType, firstKey: cardNumber});
        };
        if(gridState.cardsTurned === 1 && !gridState.resetCards){
            setGridState({...gridState, block: true});
            if(gridState.firstTurned !== cardType){
                // console.log("NOT A MATCH");
             setGridState({...gridState, cardsTurned: 0,  firstTurned: null, firstKey: null, resetCards: true});
                props.getStateOfPlay(true, false);
            } else {
                // console.log("IT'S A MATCH of cards: " + gridState.firstKey + " and " + cardNumber)
                const tempMatch = gridState.matched
                if(gridState.matched.indexOf(gridState.firstKey) === -1){
                    tempMatch.push(gridState.firstKey);
                }
                if(gridState.matched.indexOf(cardNumber) === -1){
                    tempMatch.push(cardNumber);
                }
             setGridState({...gridState, cardsTurned: 0,  firstTurned: null, firstKey: null, matched: tempMatch, resetCards: true});
             props.getStateOfPlay(true, true);
            }
        };   
    };

    useEffect(() => {
        console.log("Cards Turned " + gridState.cardsTurned);
        // console.log("First Card Type = " + gridState.firstTurned);
        // console.log("RESET CARDS STATE" + gridState.resetCards);
        // console.log(gridState.matched) 
    });  

    return (
        <div>
            <Columns rows={props.rows} turned={gridState.cardsTurned} matched={gridState.matched} getDataFromTile={getDataFromTile} reset={gridState.resetCards} clearReset={clearReset}/>
        </div>
    )
};

export default Grid;