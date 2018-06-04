/*
* In JS a number consumes 64 bits/8 bytes of memory
* A Character consumes 16 bits/ 2 bytes of memory
*/

/*
*The expression inside ${} is computed as a numeric expression here
*Used this while working with React JS
*/
var template_literals = `half of 100 is ${100 / 2}`;
console.log(template_literals);

//Determine the type
console.log(typeof 1.1111);
console.log(typeof '1.1111');
console.log(typeof template_literals);

//Comparison
/*
* Comparison between strings works in alphabetical order ie a < b < c and so on
* Uppercase letters are always less than lowercase letters
*/
console.log("Aardvark" < "Zoroaster"); //true
console.log("Aardvark" < "AArdvark"); //false

//NaN is the only value in JS that is not equal to itself
console.log(NaN == NaN); //false

//Autometic Type conversion
console.log(8 * null);      //0     - null here is converted to 0
console.log("5" - 1);       //4     - the string "5" here is converted to number
console.log("5" + 1);       //51    - here 1 is converted to string as string concatenation takes place before numeric addition  
console.log("five" * 2);    //NaN   - here "five" becomes NaN when converted to number

//Short Circuiting Of Logical Operators

/*
* null,0,"" are treated as false in JS and every other value is treated as true
* When using || operator if the value at the left is false, it returns the value at right side of the operator
*/
console.log(null || "user")     //user
console.log("Agnes" || "user")  // Agnes
console.log("" || null)         // Agnes - here the left and right both are false, as the value at left is false the expression returns the value at right even though it is false

/*
* When using && operator if the value at the left is false it returns the same else it returns the value at right
*/
console.log("" && -1)         // ""

