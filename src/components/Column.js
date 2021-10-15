import Row from './Row';
import styles from './styles/Column.module.css';

function Column() {
    return (
        <div className={styles.column}>
            <Row />
            <Row />
            <Row />
            <Row />
        </div>

    )
};

export default Column;