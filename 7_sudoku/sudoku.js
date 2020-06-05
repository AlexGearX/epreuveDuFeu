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
// 3. solution


function solution(sudoku){

    var alreadyExist = {}
    var nbObject = []
    var empty = 0
    var empties = 81
    var count = 0;
    while (empties && count < 20) {
        empties = 0;
        for (var line = 0; line < sudoku.length; line++) {
            for (var column = 0; column < sudoku.length; column++) {
                if (sudoku[line][column] === 0) {
                    alreadyExist = {};
                    for (var check = 0; check < sudoku.length; check++){
                            if (sudoku[line][check] > 0) {
                                alreadyExist[sudoku[line][check]] = true;
                            }
                            if (sudoku[check][column] > 0) {
                                alreadyExist[sudoku[check][column]] = true;
                            }
                    }
                    for (var lineSquare = Math.floor(line / 3) * 3; lineSquare < Math.floor(line / 3) * 3 + 3; lineSquare++){
                        for (var columnSquare = Math.floor(column / 3) * 3; columnSquare < Math.floor(column / 3) * 3 + 3; columnSquare++){
                            if (sudoku[lineSquare][columnSquare]) {
                                    alreadyExist[sudoku[lineSquare][columnSquare]] = true;
                            }
                        }
                    }                       
                    nbObject = Object.keys(alreadyExist)
                    if (nbObject.length == 8) {
                        for (var i = 1; i <= 9; i++) {
                            if (nbObject.indexOf('' + i) < 0) {
                                    sudoku[line][column] = i;
                            }                               
                        }
                    }else{
                        empties += 1;
                    }
                }
            }        
        }
        count += 1;
    }
    return sudoku;
}

console.log (solution(sudoku));