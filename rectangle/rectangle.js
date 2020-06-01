var fs = require("fs");
var c1ByLine = fs.readFileSync('c1.txt').toString().split("\n");    //recupere c1.txt par ligne sous forme de tableau c1Byline[Ligne][Car]
var c2ByLine = fs.readFileSync('c2.txt').toString().split("\n");

function Y(c1ByLine,c2ByLine) {                                     //recupere la coordonnée Y

    var tmp = 1
    for (var i = 0; i < c2ByLine.length-1; i++) {                   //Tableau allant de 0 aux nombre de Lignes dans le tableau c2
        for (var j = 0; j < c2ByLine[i].length; j++) {              //Tableau allant de 0 aux "nombre de cars dans le tableau c2 (c2[i])"
            if (c2ByLine[i][j] == c1ByLine[0][0]) {                 //Si Dans c2 je rencontre une correspondance avec le premier chiffre du tableau c1 Alors
                for (var k = 0; k < c1ByLine[i].length-1; k++) {    //Tableau allant de 0 aux "nombre de cars dans dans une ligne du tableau c1 (c1[i])"       
                    if ( c2ByLine[i][j+k] == c1ByLine[0][k] ) {     //Si les casses c2[i][j+k] et c1[z][k] sont identique Alors j'ajoute 1 dans ma variable tmp
                        tmp += 1                                              
                        if (tmp == (c1ByLine[0].length)) {          //Si ma variable tmp est égale au nombre de cars dans la premiere ligne du tableau c1 Alors je retourne la position
                           return i    
                                                                               
                        }
                    } else {
                        tmp = 1                                     // dans le cas ou les chiffres ne se suivent pas remet la variable tmp à 1
                    }                   
                }           
            }
        }
        
    }
}

function X(c1ByLine,c2ByLine) {                                 //recupere la coordonnée X

    var tmp = 1
    var z = 0

    for (var i = 0; i < c2ByLine[i].length; i++) {              //Tableau allant de 0 aux "nombre de cars dans le tableau c2 (c2[i])"
        for (var j = 0; j < c2ByLine.length-1; j++) {           //Tableau allant de 0 aux nombre de Lignes dans le tableau c2
            if (c2ByLine[j][i] == c1ByLine[z][0]) {             //Si Dans c2 je rencontre une correspondance avec le premier chiffre du tableau c1 Alors
                z += 1                                          //var z incrémente la ligne dans le tableau c1
                tmp + 1
                if (tmp = c1ByLine) {                           //Si ma variable tmp est égale aux nombre de lignes du tableau c1 Alors je retourne la position
                    return i
                }
            }else{
                tmp = 1
            }
        }       
    }
}

function checkArrayc1(X,Y,c1ByLine,c2ByLine) {                  //Regarde si toutes les valeurs du tableau c1 sont bien dans le tableau c2 au coordonnées trouvé
    var tmp = 0
    for (var i = 0; i < c1ByLine.length; i++) {                 //Tableau allant de 0 aux nombre de Lignes dans le tableau c2
        for (var j = 0; j < c1ByLine[i].length; j++) {          //Tableau allant de 0 aux "nombre de cars dans le tableau c2 (c2[i])"
            if (c2ByLine[i+Y][j+X] == c1ByLine[i][j]) {         //test les valeurs à partir des coordonnées X et Y
                tmp += 1
                //console.log (tmp)
                if (tmp == (c1ByLine[0].length * c1ByLine.length)) {   // Si tmp = (nombre de colonne * nombre de ligne) alors retourne vrai
                    return true    
                }                
            } else {
                return false
            }
            
        }
        
    }
}

if (checkArrayc1(X(c1ByLine,c2ByLine),Y(c1ByLine,c2ByLine),c1ByLine,c2ByLine)) {
    console.log (X(c1ByLine,c2ByLine) + "," + Y(c1ByLine,c2ByLine));
} else {
    console.log ("Pas de resultat");
}
