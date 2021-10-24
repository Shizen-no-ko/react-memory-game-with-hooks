import styles from './styles/Title.module.css';

function Title(props) {
    return (
        <div className={styles.container}>
            {/* conditional application of styles according to whether left or not */}
            <h1 className={(props.left ? styles.textLeft : styles.textRight)} >MEMORY</h1>
        </div>
    )
};

export default Title;