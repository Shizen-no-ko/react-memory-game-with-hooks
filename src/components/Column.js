import Row from './Row';
import styles from './styles/Column.module.css';

const gridSize = (16);
    var elements = [];
    for(var k = 0; k < gridSize; k++){
        elements.push(k);
    };

let shuffled = elements
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  console.log(shuffled)

    var row = [];
var rows = [];
for (var j = 0; j < 16; j = j + 4) {
    for (var i = j; i < j + 4; i++) {
        row.push(shuffled[i]);
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

function Column(props) {
    

    return (
        <div className={styles.column}>
            {rows.map((row, i) =>
                <Row key={i} row={row} />
            )}
        </div>
    )
};

export default Column;