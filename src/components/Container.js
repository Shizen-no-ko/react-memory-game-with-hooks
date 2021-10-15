import Column from './Column';
import styles from './styles/Container.module.css';

function Container() {
    return (
        <div className={styles.container}>
            <Column />   
        </div>

    )
};

export default Container;