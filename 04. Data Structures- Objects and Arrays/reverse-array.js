//Reversing an array
let reverseArray = (arr = []) => {
    if(!Array.isArray(arr)){
        return 'Invalid argument';
    }
    let newArr = [];

    for(let i = arr.length - 1; i >= 0 ; i-- ){
        newArr.push(arr[i]);
    }

    return newArr;
}

let arr = [1,3,4,52,12];
console.log(reverseArray(arr),arr);

let reverseArrayInPlace = (arr) => {
    if(!Array.isArray(arr)){
        return 'Invalid argument';
    }
    //console.log(Math.floor(arr.length / 2));
    //Swapping the positions of the values
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {

        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;

    }

    return arr;
}

let a = [1,3,4,52,12,44];
console.log(reverseArrayInPlace(a),a);
