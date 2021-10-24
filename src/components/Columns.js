import Row from './Row';
import styles from './styles/Column.module.css';




function Columns(props) {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                {props.rows.map((row, i) =>
                    <Row key={i} row={row} getDataFromTile={props.getDataFromTile} turned={props.turned} matched={props.matched} reset={props.reset} clearReset={props.clearReset}/>
                )}
            </div>
        </div>

    )
};

export default Columns;