var test = [1,2,3,4,5,6,7];
var test2 = [1,1,1,1,1];


function isUniform(arr) {
    var first = arr[0];
    for (i=0;i<arr.length;i++) {
        if (first !== arr[i]) {
            return false;
        }
    }
    return true;
}

function getMax(arr) {
    var max = arr[0];
    for (i=0;i<arr.length;i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

Array.prototype.myForEach = function(func) {
    for (var i=0; i<this.length; i++) {
        func(this[i], i);
    }
}


console.log('test1 ' + isUniform(test));
console.log('test2 ' + isUniform(test2));
console.log('max of arr is ' + getMax(test));

console.log('testing new for each');
test.myForEach(function(item, index) {
    console.log(item + ', ' + index);
}
)
