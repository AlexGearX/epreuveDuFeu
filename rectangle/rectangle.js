var fs = require("fs");
var c1ByLine = fs.readFileSync('c1.txt').toString().split("\n");
var c2ByLine = fs.readFileSync('c2.txt').toString().split("\n");

function Y(c1ByLine,c2ByLine) {
    var  tmp = 0
    for (var i = 0; i < c2ByLine.length-1; i++) {
        for (var j = 0; j < c2ByLine[i].length-1; j++) {
            if ( c2ByLine[i][j] = c1ByLine[i][j] ) {
                tmp += 1
                if (tmp == c1ByLine[i].length) {
                    return i
                }
            } else {
                tmp = 0
            }
            
        }
        
    }
    
}

function X(c1ByLine,c2ByLine) {
    var  tmp = 0
    for (var i = 0; i < c2ByLine[i].length-1; i++) {
        for (var j = 0; j < c2ByLine.length-1; j++) {
            if ( c2ByLine[i][j] = c1ByLine[i][j] ) {
                tmp += 1
                if (tmp == c1ByLine.length) {
                    return i
                }
            } else {
                tmp = 0
            }
            
        }
        
    }
    
}

console.log (X(c1ByLine,c2ByLine) + "," + Y(c1ByLine,c2ByLine));
//console.log (c2ByLine[0][0]);   //C'EST UN TABLEAU MULTIII c1ByLine[i(ligne)][j(numero)]