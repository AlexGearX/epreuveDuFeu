function nbfacto(nb){
    if (nb == 1) {
        return 1
    } else {
        return (nb * nbfacto(nb-1))
    }
}
var readline= require("readline-sync");
var nb = readline.questionInt("Entrez un nombre à factoriser: ")

console.log (nbfacto(nb));