const sumAll = function(firstNum,secondNum) {
    sum=0
while(secondNum>=firstNum){
    sum+=secondNum;
    secondNum--;
}
return(sum)
};

// Do not edit below this line
module.exports = sumAll;
