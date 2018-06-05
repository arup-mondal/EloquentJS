/*
* Print numbers 1 to 100
* If number divisible by 3 print 'Fizz'
* If number divisible by 5 (and not 3) print 'Buzz'
* If number divisible by both 3 and 5 print 'FizzBuzz
*/

var reminderBy3 = 0;
var reminderBy5 = 0;

for(var i = 1; i <= 100; i++){
    reminderBy3 = i % 3;
    reminderBy5 = i % 5;

    if(!reminderBy3){
        if(reminderBy5){
            console.log('Fizz');
        }else{
            console.log('FizzBuzz');
        }
    }else if(!reminderBy5){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}