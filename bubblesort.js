function bubbleSort(inputArr) {
    var swaps = 0;
    var passes = 0;
    var unsorted = true;

    while (unsorted) {
        unsorted = false;
        for (var i = 0; i < inputArr.length-1-passes; i++) {
            if(inputArr[i]>inputArr[i+1] && inputArr[i+1]) {
                var temp = inputArr[i+1];
                inputArr[i+1] = inputArr[i];
                inputArr[i] = temp;
                unsorted = true;
                swaps++;
            }
        };
        passes++;
    }
    return inputArr;
}
