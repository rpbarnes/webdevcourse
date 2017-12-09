var age = prompt('How old are you?');

if (age < 18){
    alert('Sorry you are not old enough to enter.');
} else if (age >= 18 && age < 21) {
    alert('You can come in, but cannot drink.');
} else {
    alert('You can come in and have some drinks.');
}

if (age % 2) {
    alert('your age is odd');
}

if (Math.sqrt(age) % 1 === 0) {
    alert('your age is a perfect square');
}

