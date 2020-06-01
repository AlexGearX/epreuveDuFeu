var fs = require("fs");
var c1ByLine = fs.readFileSync('c1.txt').toString().split("\n");
var c2ByLine = fs.readFileSync('c2.txt').toString().split("\n");

function Y(c1ByLine,c2ByLine) {

    var tmp = 1
    var z = 0
    for (var i = 0; i < c2ByLine[i].length-1; i++) { 
        for (var j = 0; j < c2ByLine.length; j++) { 
            if (c2ByLine[i][j] == c1ByLine[z][0]) {
                for (var k = 0; k < c1ByLine[i].length-1; k++) {               
                    if ( c2ByLine[i][j+k] == c1ByLine[z][k] ) {
                        tmp += 1                                              
                        if (tmp == (c1ByLine[i].length)) {
                           return i    
                                                                               
                        }
                    } else {
                        tmp = 1
                    }                   
                }           
            }
        }
        
    }
    console.log ("Pas de resultat en Y");
}


function X(c1ByLine,c2ByLine) {

    var tmp = 1
    var z = 0

    for (var i = 0; i < c2ByLine[i].length; i++) { 
        for (var j = 0; j < c2ByLine.length-1; j++) { 
            if (c2ByLine[j][i] == c1ByLine[z][0]) {
                z += 1
                tmp + 1
                if (tmp = c1ByLine) {
                    return i
                }
            }else{
                tmp = 1
            }
        }       
    }
    console.log ("Pas de resultat en X");
}
console.log (X(c1ByLine,c2ByLine) + "," + Y(c1ByLine,c2ByLine));