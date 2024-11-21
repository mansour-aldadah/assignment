// Task 2
function sumAndAvg(numbers) {
  let sum = numbers.reduce((sum, e) => sum + e, 0);
  let average = sum / numbers.length;
  return { sum, average };
}

// Example
let result = sumAndAvg([10, 20, 30, 40, 50]);
console.log("The sum is " + result.sum);
console.log("The avg is " + result.avg);

///////////////////////////////

// Task 3
function RemoveDuplicates(names) {
  return Array(...new Set(names));
}

let nums = [1, 2, 2, 3, 1, 3, 4, 5, 2, 3, 5];
let numsWithoutRepeat = RemoveDuplicates(nums);
console.log(numsWithoutRepeat);

/* Note : 
    I think this way not a constant time complexity,
    but I don't found another way to make it with a constant time.
*/
