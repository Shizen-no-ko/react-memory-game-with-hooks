import React, { useState, useEffect } from 'react';

import styles from './styles/Tile.module.css';
import TileText from './TileText';

const images = [<i className='fas fa-otter'></i>, <i className='fas fa-hippo'></i>, <i className='fas fa-dog'></i>, <i className='fas fa-kiwi-bird'></i>, <i className='fas fa-spider'></i>, <i className='fas fa-horse'></i>, <i className='fas fa-fish'></i>, <i className='fas fa-cat'></i>, <i className='fas fa-dragon'></i>, <i className='fas fa-frog'></i>];
const fgColors = ["#FFC312", "#EE5A24", "#A3CB38", "#12CBC4", "#FDA7DF", "#ED4C67", "#833471", "#006266"];
const bgColors = ["#833471", "#12CBC4", "#ED4C67", "#EE5A24", "#006266", "#A3CB38", "#FFC312", "#FDA7DF",];
// const bgColors = [".bgYellow", ".bgOrange", ".bgGreen", ".bgBlue", ".bgPink", ".bgRed", ".bgPurple", ".bgTurquoise"];
// const fgColors = [".fgPurple", ".fgBlue", ".fgRed", ".fgOrange", ".fgTurquoise", ".fgGreen", ".fgYellow", ".fgPink"];



function Tile(props) {
    // modulo variable for rendering according to images and color array sizes
    const modulo = 8;
    // state for handling flipping of tiles display
    const [showFace, setShowFace] = useState(false)
    const [showTile, setShowTile] = useState(true)

    const inputRef = React.useRef(null)

    if (showTile && props.matched.indexOf(props.item) !== -1) {
        inputRef.current.classList.add(styles.noClick);
        setTimeout(() => {
            setShowTile(false);
        }, 1000);
    }


    const onClick = (e, auto = false) => {
            setShowFace(!showFace);
            if (!auto) {
                props.getDataFromTile(props.item % modulo, props.item)
            } 
    };

    useEffect(() => {
        if (showFace && props.reset) {
            setTimeout(() => {
                inputRef.current.classList.add(styles.flip);
                inputRef.current.click(true);
                props.clearReset(true);
            }, 1000);
            setTimeout(() => {
                inputRef.current.classList.remove(styles.flip);
            }, 2000);
        }
        if(!showFace && props.reset){
            inputRef.current.classList.add(styles.noClick);
            setTimeout(() => {
                inputRef.current.classList.remove(styles.noClick);
            }, 1000);
        }
    })


    return (
        <div onClick={onClick} ref={inputRef}>
            {showTile ?
                <div className={styles.tile}>
                    {showFace ?
                        <div style={{ color: fgColors[props.item % modulo], backgroundColor: bgColors[props.item % modulo], height: "100%" }}>
                            {images[props.item % modulo]}
                            {props.reset}
                        </div>
                        :
                        <div>
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