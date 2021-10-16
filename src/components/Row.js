import Tile from './Tile';
import styles from './styles/Row.module.css';

function Row(props) {
    return (
        <div className={styles.row}>
        {props.row.map((item, i) => <Tile key = {i} item = {item}/>)}
            {/* <Tile />
            <Tile />
            <Tile />
            <Tile /> */}
        </div>

    )
};

export default Row;