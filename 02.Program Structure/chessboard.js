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
var output = '';
for(var i = 0; i < 8; i++){
    output+= '\n';
    for(var j = 0; j < 8; j++){
        output+= ' ';
        if((!(i % 2) && (j % 2)) || ((i % 2) && !(j % 2))){
            output+= '#';
        }
    }
}
console.log(output);
