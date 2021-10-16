import styles from './styles/Tile.module.css';
import TileText from './TileText';

const images = [<i class='fas fa-otter'></i>, <i class='fas fa-hippo'></i>, <i class='fas fa-dog'></i>, <i class='fas fa-kiwi-bird'></i>, <i class='fas fa-spider'></i>, <i class='fas fa-horse'></i>, <i class='fas fa-fish'></i>, <i class='fas fa-cat'></i>, <i class='fas fa-dragon'></i>, <i class='fas fa-frog'></i>];
const fgColors = ["#FFC312", "#EE5A24", "#A3CB38", "#12CBC4", "#FDA7DF", "#ED4C67", "#833471", "#006266"];
const bgColors = ["#833471", "#12CBC4", "#ED4C67", "#EE5A24",  "#006266", "#A3CB38",  "#FFC312", "#FDA7DF",];
// const bgColors = [".bgYellow", ".bgOrange", ".bgGreen", ".bgBlue", ".bgPink", ".bgRed", ".bgPurple", ".bgTurquoise"];
// const fgColors = [".fgPurple", ".fgBlue", ".fgRed", ".fgOrange", ".fgTurquoise", ".fgGreen", ".fgYellow", ".fgPink"];


function Tile(props) {
    const modulo = 8;
    return (
        <div className={styles.tile} style={{color: fgColors[props.item % modulo], backgroundColor: bgColors[props.item % modulo]}}>
        {images[props.item % modulo]}
{/* <TileText/> */}

        </div>
    )
};

export default Tile;