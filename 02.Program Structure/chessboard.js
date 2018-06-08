/*
* Form a 8*8 chessboard with # and space
* Output:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

//initialize the variable to output the result
var output = '';
for(var i = 0; i < 8; i++){
    //add a line break everytime the loop iterates to get 8 rows
    output+= '\n';
    for(var j = 0; j < 8; j++){
        //make a 8x8 structure with space(' ') only
        output+= ' ';
        //add # to structure when row number is odd and column number is even or when the row number is even and column number is odd
        if((!(i % 2) && (j % 2)) || ((i % 2) && !(j % 2))){
            output+= '#';
        }
    }
}
console.log(output);
