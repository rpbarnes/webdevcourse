// replace kebab case with snake case.

function kebabToSnake(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === '-')
            str = replaceIndex(str,i,'_'); // redefine new str with _ instead of -
    }
    return str
}

function replaceIndex(str, indexToReplace, replacement) {
    var newString = str.substr(0,indexToReplace) + replacement + str.substr(indexToReplace + 1, str.length);
    return newString;
}

badString = prompt('Give me a kebab');
goodString = kebabToSnake(badString);
alert('I give you a Snake '+goodString);
