var go = true;
var todoList = [];

while (go) {
    answer = prompt('What would you like to do?');
    if (answer === 'new') {
        var newItem = prompt('What do you need to do?');
        todoList.push(newItem);
    } else if (answer === 'list') {
        for (i=0;i<todoList.length;i++) {
            console.log('**********');
            console.log(i+': '+todoList[i]);
        }
    } else if (answer === 'quit') {
        go = false;
    } else if (answer === 'delete') {
        var indexToDel = prompt('Which index would you like to delete?');
        var removed = todoList.splice(indexToDel, 1);
    }else {
        alert('I did not understand. Try again.');
    }
}





