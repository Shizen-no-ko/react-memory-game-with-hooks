import Game from './Game';
import styles from './styles/Container.module.css';

function Container() {
    return (
        <div className={styles.container}>
            <Game />   
        </div>

    )
};

export default Container;