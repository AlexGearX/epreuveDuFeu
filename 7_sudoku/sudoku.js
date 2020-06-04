// 1. get the sudoku from the .txt file and remove | , + , - and replace _ by 0
var fs = require("fs");
var file = fs.readFileSync('s.txt').toString().replace(/[+\-|]/g, '').split("_").join("0").split('\n');    

// 2. Transform array string to array number

var sudoku = []
for (var i = 0; i < file.length; i++) {
    var sudokuInt = []
    if (file[i] !== '') {
      for (var j = 0; j <= 8; j++) {   
         sudokuInt.push(parseInt(file[i][j]))  
        }
        sudoku.push(sudokuInt)
    }   
}
// 3. test ligne colonne carré fonction recurcive ?
function checkLine(sudoku,line) {
    var tmp = 0
    for (let i = 0; i < sudoku.length; i++) {
        tmp += sudoku[line][i]     
    }
    if (tmp = 45) {
        return true
    } else {
        if (tmp < 36) {
            checkColumn(sudoku,line)
            checkSquare(sudoku,line)
            checkLine(sudoku,line)
        } else {
            tmp = 45-tmp
            for (let j = 0; j < sudoku.length; j++) {
                 sudoku[line].replace(0, tmp)
            }
        }
    }
 }
function checkColumn(sudoku, column) {
    var tmp = 0
    for (let i = 0; i < sudoku.length; i++) {
        tmp += sudoku[column][i]     
    }
    if (tmp = 45) {
        return true
    } else {
        if (tmp < 36) {           
            checkSquare(sudoku,column)
            checkLine(sudoku,column)
            checkColumn(sudoku,column)
        } else {
            tmp = 45-tmp
            for (let j = 0; j < sudoku.length; j++) {
                 sudoku[j][column].replace(0, tmp)
            }
        }
    }
}
function checkSquare(sudoku, line) {
    var tmp = 0
}



console.log(sudoku)