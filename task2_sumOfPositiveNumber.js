function sumOfPositiveNumbers(arr) {
    return arr.reduce((sum, num) => sum + (num > 0 ? num : 0), 0);
  }

const numbers =  [2, -5, 10, -3, 7];
const result = sumOfPositiveNumbers(numbers);
console.log(result); 