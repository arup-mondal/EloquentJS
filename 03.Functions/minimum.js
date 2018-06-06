/*
* Return the minimum number
*/
let min = (a,b) => {
    if(isNaN(a) || isNaN(b)){
        return "invalid number given";
    }
    if(a === b){
        return 'Both numbers are equal';
    }
    return a < b ? a : b;
}

console.log(min(0,10));     //0
console.log(min(0,-10));    //-10
console.log(min(10,10));    //Both numbers are equal
