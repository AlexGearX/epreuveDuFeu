
function factorial(nbFact)
{
  if(nbFact === 0)
    return '1'

  if(!nbFact)
    return ''

  var i, nextNb, tmp,

  result = nbFact.toString().split('').reverse().map(Number)

  while(--nbFact){
    i = 0
    tmp = 0

    while((nextNb = result[i++]) !== undefined || tmp) {
      tmp = (nextNb || 0) * nbFact + tmp
      result[i-1] = tmp % 10
      tmp = parseInt(tmp/10)
    }
  }
for (let j = 3; j < result.length; j+=4) {
  result.splice((0+j), 0, [","]) 
}
  return result.reverse().join('')
}

var readline= require("readline-sync");
var nbFact = readline.questionInt("Entrez un nombre à factoriser: ")
console.log (factorial(nbFact));
