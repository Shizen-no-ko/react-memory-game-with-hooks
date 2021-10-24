import styles from './styles/ScoreDisplay.module.css';

// variable component for displaying tries and pairs matched scores
function ScoreDisplay(props) {
    return (
        <div className={(props.left ? styles.left : styles.right)}>
            <h3 className={styles.h3}>{props.text}</h3>
            <h1 className={styles.h1}>{props.tries}</h1>
        </div>
    )
};

export default ScoreDisplay;