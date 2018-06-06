/*
* Count occurances of B
*/
let countBs = (str) => {
    let counter = 0;
    if(!isNaN(str)){
        return "Number given";
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'B'){
            counter++;
        }
    }

    return counter;
}

console.log(countBs("ABBC"));   //2
console.log(countBs("baC"));    //0
console.log(countBs(-1.99));    //Number given

/*
* Count occurances of given parameter
*/

let countChar = (str,char) => {
    let counter = 0;
    if(!isNaN(str)){
        return "Number given";
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            counter++;
        }
    }

    return counter;
}

console.log(countChar("ABBC",'A'));   //1
