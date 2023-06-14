/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let sum = 0;
    let startTime = new Date().getSeconds();
    console.log(startTime);
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
    let endTime = new Date().getSeconds();
    console.log(endTime);
    return (endTime - startTime);
}

let timeTaken1 = calculateTime(100);
console.log(timeTaken1);

let timeTaken2 = calculateTime(100000);
console.log(timeTaken2);

let timeTaken3 = calculateTime(1000000000);
console.log(timeTaken3);