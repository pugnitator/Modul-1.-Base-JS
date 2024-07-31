console.log(getDivisorsCount(5));

function getDivisorsCount(number) {
  let numberOfDivisors = 0;

  if (isNaN(number)) return NaN;
  else if (number === 0 || !Number.isInteger(number))
    alert(`\"number\" должен быть целым числом и больше нуля!`);
  else {
    for (let i = 0; i <= number; i++) {
      if (number % i === 0) numberOfDivisors += 1;
      else continue;
    }
  }

  return numberOfDivisors;
}
