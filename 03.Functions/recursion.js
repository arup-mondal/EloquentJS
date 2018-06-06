/*
* recursive function to check if a number is even or odd
*/

let isEven = (a) => {
    if(a < 0 || isNaN(a)){
        return "Invalid number given";
    }
    switch(a){
        case 0:
            return true;
            break;
        case 1:
            return false;    
            break;
        default:
            return isEven(a-2); 
    }       
}

console.log(isEven(-1));    //Invalid number given
console.log(isEven(50));    //true
console.log(isEven(75));    //false
console.log(isEven('abc')); //Invalid number given