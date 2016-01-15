
function merge(arr1, arr2) {
    var combinedArr = [];
    var firstArray = arr1.slice();
    var secondArray = arr2.slice();

    while(firstArray.length && secondArray.length) {
        var lowestVal = firstArray[0] < secondArray[0] ? firstArray.shift() : secondArray.shift();
        combinedArr.push(lowestVal);
    }

    if (secondArray.length) combinedArr = combinedArr.concat(secondArray)
    else combinedArr = combinedArr.concat(firstArray);

    return combinedArr;
}

function split(arr) {
    if(arr.length<2) return arr;

    var splitArrays = [];

    var splitIndex = Math.floor(arr.length/2);
    splitArrays.push(arr.slice(0,splitIndex));
    splitArrays.push(arr.slice(splitIndex));

    return splitArrays;
}

function mergeSort(arr) {
    if (arr.length<=1) return arr;
        var splitArr = split(arr);
    var left = mergeSort(splitArr[0]);
    var right = mergeSort(splitArr[1]);

    return merge(left, right);
}