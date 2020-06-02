var readline= require("readline-sync");
var fs = require("fs");
var word = readline.question("Entrez un mot: ");
var wordList = fs.readFileSync('fr.txt').toString().split("\n"); 

var i = 0                                           //Initialise la variable i et le tableau result       
var result = [] 
while (i < wordList.length-1) {                     //Tant Que i < taille du tableau wordList -1
    if (anagramSortSort (word, wordList[i])) {      //Si la fonction retourne Vrai alors :
         result.push(wordList[i])                   //Ajoute la valeur de wordList[i] au tableau result (à la derniere case du tableau grace à push)
         i += 1                                     //Incrementation de la variable i
         if (i >= wordList.length-1) {              //Si i est >= à taille de wordList -1 (quand il est sur la derniere boucle) alors j'affiche le tableau result
           console.log (result);  
         }        
    }else{                                          //Si la fonction retourne Faux alors :
       i += 1 
       if (i >= wordList.length-1) {
            console.log (result);  
        }
    }
}

function anagramSort (str1, str2) {                 
    
     if (str1.length !== str2.length) {             //Vérifie si les deux strings ont la même taille.
        return false;
    }
    

    var s1 = str1.split('').sort().join('');        //Triez les deux strings.
    var s2 = str2.split('').sort().join('');

    
    if (s1 === s2) {                                //Compare les deux strings triées.
        return true
    } 
}