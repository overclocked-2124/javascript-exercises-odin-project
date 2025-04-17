const reverseString = function(inputString) {
    reversed="";
    length=inputString.length;
    while(length--){
        reversed += inputString[length]
    }

    return(reversed)

};

// Do not edit below this line
module.exports = reverseString;
