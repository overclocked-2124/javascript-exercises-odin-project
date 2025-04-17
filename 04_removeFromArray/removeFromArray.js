const removeFromArray = function(arr, ...args) {
    newArr=[];
    count=0;
    for(i=0;i<arr.length;i++){
        if(args.includes(arr[i])){
            continue;
        }
        newArr[count]=arr[i]
        count++
    }
    return(newArr)
};

// Do not edit below this line
module.exports = removeFromArray;
