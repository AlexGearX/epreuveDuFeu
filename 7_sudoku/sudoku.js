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
    var empty = 20
    var tmp = 0

    while (empty && tmp < 20) {
        empty = 0;
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
                    if (nbObject.length === 8) {
                        for (var i = 1; i <= 9; i++) {
                            if (nbObject.indexOf(i.toString()) < 0) {
                                    sudoku[line][column] = i;
                            }                               
                        }
                    }else{
                        empty += 1;
                    }
                }
            }        
        }
        tmp += 1;
    }
    return sudoku;
}

solution(sudoku)

// 4. back to original design
var finalSudoku = []
for (var l = 0; l <= 8; l++) { 
    var sudokuStr = []
    for (var k = 0; k <= 8; k++) {   
        sudokuStr.push(sudoku[l][k].toString())
    }
    finalSudoku.push(sudokuStr)
}


for (let index = 0; index < 9; index++) {
    finalSudoku[index].splice(3, 0, [])
    finalSudoku[index].splice(7, 0, [])  
}
finalSudoku.splice(3, 0, [])
finalSudoku.splice(7, 0, [])

for (let j = 3; j < 8; j+=4) {
    for (let index = 0; index <= 10; index++) {       
        finalSudoku[index][j] = "|";       
        finalSudoku[j][index] = "-";           
    }    
}
for (let j = 3; j < 8; j+=4) {
    for (let index = 3; index < 8; index+=4) {       
        finalSudoku[index][j] = "+";                
    }    
}

for (let index = 0; index < finalSudoku.length; index++) {
console.log (finalSudoku[index].join(' '));

}
