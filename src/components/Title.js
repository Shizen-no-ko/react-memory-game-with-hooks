import styles from './styles/Title.module.css';

function Title(props) {
    return (
        <div className={styles.container}>
        <h1 className={(props.left ? styles.textLeft : styles.textRight)} >MEMORY</h1>
        </div>
    )
};

export default Title;