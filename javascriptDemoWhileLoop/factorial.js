var factorial = prompt('Give me a number to calculate the factorial of');

function calcFactorial(factorial) {
    var dimFact = factorial;
    while (dimFact > 1) {
        dimFact--;
        factorial = factorial * dimFact;
    }
    return factorial
}
var answer = calcFactorial(factorial)
alert('The factorial is '+ answer.toString());



