import React, { useState, useEffect } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

import styles from './styles/Tile.module.css';
import TileText from './TileText';

const images = [<i className='fas fa-otter'></i>, <i className='fas fa-hippo'></i>, <i className='fas fa-dog'></i>, <i className='fas fa-kiwi-bird'></i>, <i className='fas fa-spider'></i>, <i className='fas fa-horse'></i>, <i className='fas fa-fish'></i>, <i className='fas fa-cat'></i>, <i className='fas fa-dragon'></i>, <i className='fas fa-frog'></i>];
const fgColors = ["#FFC312", "#EE5A24", "#A3CB38", "#12CBC4", "#FDA7DF", "#ED4C67", "#833471", "#006266"];
const bgColors = ["#833471", "#12CBC4", "#ED4C67", "#EE5A24", "#006266", "#A3CB38", "#FFC312", "#FDA7DF",];



function Tile(props) {
    // modulo variable for rendering according to images and color array sizes
    const modulo = 8;
    // state for handling flipping of tiles display
    const [showFace, setShowFace] = useState(false)
    // state for deleting tiles
    const [showTile, setShowTile] = useState(true)

    // ref for various functions
    const inputRef = React.useRef(null)

    // handling of deletion of matched tiles
    if (showTile && props.matched.indexOf(props.item) !== -1) {
        inputRef.current.classList.add(styles.noClick);
        setTimeout(() => {
            setShowTile(false);
        }, 1000);
    }

    // click handler for tiles,
    // if tile has been clicked automatically; denoted by value of "auto", 
    // ie clicked to return to face-down, do not send up data which alters the state in Grid.js
    // if auto is false, send up data
    const onClick = (e, auto = false) => {
        setShowFace(!showFace);
        if (!auto) {
            props.getDataFromTile(props.item % modulo, props.item)
        }
    };

    useEffect(() => {
        // if two tiles are showing, add flip animation style to those tiles, 
        // and simulate click to flip those tiles back
        if (showFace && props.reset) {
            setTimeout(() => {
                inputRef.current.classList.add(styles.flip);
                inputRef.current.click(true);
                props.clearReset(true);
            }, 1000);
            // remove/reset flip animation
            setTimeout(() => {
                inputRef.current.classList.remove(styles.flip);
            }, 2000);
        };
        // if two tiles have been turned and props.reset is active, block clicking of further tiles
        // so that only two tiles can be turned at a time
        if (!showFace && props.reset) {
            inputRef.current.classList.add(styles.noClick);
            // reinstate click functionality after 1 second
            setTimeout(() => {
                inputRef.current.classList.remove(styles.noClick);
            }, 1000);
        }
    })


    return (
        // add click handler and get ref for tile for various operations
        <div onClick={onClick} ref={inputRef}>
            {/* condition for showing tile, if already paired or not */}
            {showTile ?
                <div className={styles.tile}>
                    {/* conditional rendering of face or back of tile  custom styling/rendering according to item number divided by number of pairs */}
                    {showFace ?
                        <div style={{ color: fgColors[props.item % modulo], backgroundColor: bgColors[props.item % modulo], height: "100%" }}>
                            {images[props.item % modulo]}
                            {props.reset}
                        </div>
                        :
                        <div>
                            {/* if back of tile should be shown, render tile text */}
                            <TileText />
                        </div>}
                </div>
                :
                <div className={styles.placeholder}></div>
            }
        </div>
    )
};

export default Tile;