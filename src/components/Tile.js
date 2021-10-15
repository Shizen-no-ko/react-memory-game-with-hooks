import styles from './styles/Tile.module.css';
import TileText from './TileText';

function Tile() {
    return (
        <div className={styles.tile}>
<TileText/>
        </div>
    )
};

export default Tile;