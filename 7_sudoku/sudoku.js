var fs = require("fs");
var sudoku = fs.readFileSync('s.txt').toString().split('\n');    //recupere c1.txt par ligne sous forme de tableau c1Byline[Ligne][Car]

var arrayX = []


// FAIRE FONCTION POUR REMPLACER _ PAR 0

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        if (sudoku[i][j] === "_") {
            sudoku = Object.assign([],sudoku[i], {[j]:"0"})  
        }                   
    }          
}

// FONCTION X
for (let xDown = 0; xDown <= 10; xDown++) {
    for (let x = 0; x <= 10; x++) {
        if (parseInt(sudoku[xDown][x])) {
           arrayX.push(sudoku[xDown][x]) 
        }                      
    }          
}
console.log (arrayX.join());
//console.log (sudoku);