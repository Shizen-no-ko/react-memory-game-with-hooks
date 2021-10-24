import styles from "./styles/GameOver.module.css";

// returns h1 with animated gameOver text
function GameOver(props) {
    return (
        <div>
            <h1 className={styles.text} >GAME OVER</h1>
        </div>
    )
};

export default GameOver;