var readline= require("readline-sync");
var number = readline.questionInt("Nombre de marches ? ");
var hash = "\#"
var space = " "

for (let index = 1; index < number; index++) {
    console.log (space.repeat(number-index) + hash.repeat(index));
}

