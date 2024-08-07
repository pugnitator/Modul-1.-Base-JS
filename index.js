const numbers = [10, 4, 100, -5, 54, 2];


let numbersSum = 0;
for (let i = 0; i < numbers.length; i++) {
  numbersSum += Math.pow(numbers[i], 3);
}
console.log(numbersSum);


numbersSum = 0;
for (let i of numbers) {
  numbersSum += Math.pow(i, 3);
}
console.log(numbersSum);


numbersSum = 0;
numbers.forEach((element) => (numbersSum += Math.pow(element, 3)));
console.log(numbersSum);


numbersSum = numbers.reduce(
  (sum, currentValue) => {
    // console.log(sum);
    // console.log(currentValue);
    return sum + Math.pow(currentValue, 3);
  }, 0
);
console.log(numbersSum);
