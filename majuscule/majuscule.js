var readline= require("readline-sync");
var chars = readline.question("Entrez une phrase :").split('');
var temp = 0

for (var index = 0; index < chars.length; index++) {
    if (chars[index] == ' ') {
    } else {
        if (temp % 2 == 0 ) {
            chars[index] = chars[index].toLowerCase()
            temp += 1
        } else {
            chars[index] = chars[index].toUpperCase() 
            temp += 1
        } 
    }
}
    console.log (chars.join(''));