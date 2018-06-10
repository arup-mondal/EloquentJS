/*
* Function returning all numbers within the given range in an array
*/

let range = (start,end,step = 1) =>{
    //Check if start and end are numbers
    if(isNaN(start) || isNaN(end)){
        return 'Invalid range given';
    }
    let arr = [];
    
    //push to array if start is less than end and step is positive
    if(start < end && step > 0){
        while(start <= end){
            arr.push(start);
            start+=step;
        }
    }
    //push to array if start is greater than end and step is negative
    else if(start > end && step < 0){
        while(start >= end){
            arr.push(start);
            start+=step;
        }
    }
    else{
        return "Invalid arguments";
    }
    return arr;
}

console.log(range(1,6));        //[1,2,3,4,5,6]
console.log(range(1,6,3));      //[1,4]   
console.log(range(12,4,-1));    //[ 12, 11, 10, 9, 8, 7, 6, 5, 4 ]
console.log(range(12,4,-3));    //[ 12, 9, 6 ]
console.log(range(12,4,3));     //Invalid arguments

/*
* Function returning sum of array
*/
let sum = (arr = []) => {
    if(!Array.isArray(arr)){
        return 'Invalid argument';
    }
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total+=arr[i];
    }
    return total;
}
console.log(sum(range(12,4,-3)));   //27
console.log(sum(range(1,10)));      //55