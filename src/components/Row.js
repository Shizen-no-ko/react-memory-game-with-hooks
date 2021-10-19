import Tile from './Tile';
import styles from './styles/Row.module.css';

function Row(props) {
    return (
        <div className={styles.row}>
        {props.row.map((item, i) => <Tile key = {i} item = {item} getDataFromTile={props.getDataFromTile} turned={props.turned} reset={props.reset} clearReset={props.clearReset} />)}
        </div>

    )
};

export default Row;