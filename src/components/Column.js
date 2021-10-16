import Row from './Row';
import styles from './styles/Column.module.css';



function Column(props) {
    var row = [];
var rows = [];
for (var j = 0; j < 32; j = j + 4) {
    for (var i = j; i < j + 4; i++) {
        row.push(i);
        console.log(row)
        console.log(j)
        console.log(i)
    }
    rows.push(row);
    row = [];
}
// var rows = [[0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 2, 3], [4, 5, 6, 7]];
console.log("here are the rows")
console.log(rows);

    return (
        <div className={styles.column}>
            {rows.map((row, i) =>
                <Row key={i} row={row} />
            )}
        </div>
    )
};

export default Column;