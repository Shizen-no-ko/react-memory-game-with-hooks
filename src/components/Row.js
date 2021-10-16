import Tile from './Tile';
import styles from './styles/Row.module.css';

// function handleClick(id) {
//     const tile = document.getElementById(id);
//     tile.classList.toggle("show")
// };

function Row(props) {


    return (
        <div className={styles.row}>
        {props.row.map((item, i) => <Tile key = {i} item = {item}/>)}
        </div>

    )
};

export default Row;