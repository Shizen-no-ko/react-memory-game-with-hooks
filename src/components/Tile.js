import React, { useState } from 'react';
import styles from './styles/Tile.module.css';
import TileText from './TileText';

const images = [<i className='fas fa-otter'></i>, <i className='fas fa-hippo'></i>, <i className='fas fa-dog'></i>, <i className='fas fa-kiwi-bird'></i>, <i className='fas fa-spider'></i>, <i className='fas fa-horse'></i>, <i className='fas fa-fish'></i>, <i className='fas fa-cat'></i>, <i className='fas fa-dragon'></i>, <i className='fas fa-frog'></i>];
const fgColors = ["#FFC312", "#EE5A24", "#A3CB38", "#12CBC4", "#FDA7DF", "#ED4C67", "#833471", "#006266"];
const bgColors = ["#833471", "#12CBC4", "#ED4C67", "#EE5A24", "#006266", "#A3CB38", "#FFC312", "#FDA7DF",];
// const bgColors = [".bgYellow", ".bgOrange", ".bgGreen", ".bgBlue", ".bgPink", ".bgRed", ".bgPurple", ".bgTurquoise"];
// const fgColors = [".fgPurple", ".fgBlue", ".fgRed", ".fgOrange", ".fgTurquoise", ".fgGreen", ".fgYellow", ".fgPink"];



function Tile(props) {
    const [showFace, setShowFace] = useState(false)
    const onClick = () => setShowFace(!showFace)
    // modulo variable for rendering according to images and color array sizes
    const modulo = 8;
    return (
        <div onClick={onClick}>
 <div className={styles.tile}  >
            {showFace ?
                <div style={{ color: fgColors[props.item % modulo], backgroundColor: bgColors[props.item % modulo], height: "100%" }}>
                    {images[props.item % modulo] }
                </div>
                :
                <div>
                    <TileText />
                </div>}
        </div>
        </div>
       
    )
};

export default Tile;