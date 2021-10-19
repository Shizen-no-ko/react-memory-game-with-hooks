import Grid from "./Grid";

const gridSize = (16);
var elements = [];
for (var k = 0; k < gridSize; k++) {
    elements.push(k);
};
let shuffled = elements
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
var row = [];
var rows = [];
for (var j = 0; j < 16; j = j + 4) {
    for (var i = j; i < j + 4; i++) {
        row.push(shuffled[i]);
    }
    rows.push(row);
    row = [];
}


function Game() {
    return (
        <div>
            <Grid rows={rows} />
        </div>
    )
};

export default Game;