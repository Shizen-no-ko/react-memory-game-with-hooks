import Tile from './Tile';
import styles from './styles/Row.module.css';

function Row() {
    return (
        <div className={styles.row}>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </div>

    )
};

export default Row;