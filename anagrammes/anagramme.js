var readline= require("readline-sync");
var fs = require("fs");
var word = readline.question("Entrez un mot: ").split(' ');
var wordList = fs.readFileSync('fr.txt').toString().split("\n"); 

for (let index = 0; index < wordList.length; index++) {
    function ana(word,worldlist,index)    
}



function ana(word,wordlist,index)
if (word.length == wordlist[index].length) { 
    for (let i = 0; i < word.length; i++) {
        if (word[i] == wordList[i]) {
            val += 1
            if (val == word.length) {
                 console.log(wordList[index]);
            }
        } else {
            return false
        }
        
    }
} else {
    return false
}