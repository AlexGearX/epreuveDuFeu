var fs = require("fs");
var c1ByLine = fs.readFileSync('c1.txt').toString().split("\n");
var c2ByLine = fs.readFileSync('c2.txt').toString().split("\n");

function Y(c1ByLine,c2ByLine) {

    var tmp = 1
    var z = 0

    for (var i = 0; i < c2ByLine[i].length-1; i++) { //6
        console.log ("i");
        for (var j = 0; j < c2ByLine.length; j++) { //5
            console.log ("j");
            if (c2ByLine[i][j] == c1ByLine[z][0]) {
                for (var k = 0; k < c1ByLine[0].length-1; k++) { // 3
                    console.log ("k");                 
                    if ( c2ByLine[i][j+k] == c1ByLine[z][k] ) {
                        tmp += 1
                        console.log (tmp);
                        z += 1
                        console.log ("z" + z);
                        if (tmp == c1ByLine[i].length) {
                            return i
                        }
                    } else {
                        tmp = 1
                    }
                    
                }    
       
            }
        }
        
    }
    
}


function X(c1ByLine,c2ByLine) {

    var tmp = 1
    var z = 0

    for (var i = 0; i < c2ByLine.length; i++) { //6
        //console.log ("i");
        for (var j = 0; j < c2ByLine.length-1; j++) { //5
           // console.log ("j");
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
    
}


//console.log (Y(c1ByLine,c2ByLine));
console.log (X(c1ByLine,c2ByLine) + "," + Y(c1ByLine,c2ByLine));
//onsole.log(c1ByLine[0][0].length);