var readline= require("readline-sync");
var chiffreSaisi = readline.questionInt("Nombre de marches ? ");
var diese = "\#"
var space = " "

for (let index = 1; index < chiffreSaisi; index++) {
    console.log (space.repeat(chiffreSaisi-index) + diese.repeat(index));
}

