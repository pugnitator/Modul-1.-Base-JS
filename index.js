console.log(getSumOfNumbers(10));


function getSumOfNumbers(number, type = 'odd') {
  if (isNaN(number)) return NaN;
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    if (checkType(i, type)) {
      sum += i;
    }
  }
  return sum;
}

function checkType(number, type) {
  let isTypeCorrect;
  switch (type) {
    case "odd":
      isTypeCorrect = number % 2 > 0;
      break;

    case "even":
      isTypeCorrect = number % 2 === 0;
      break;

    case "":
      isTypeCorrect = true;
      break;

    default: {
      console.log("Ошибка. Неизвестный тип");
      isTypeCorrect = false;
    }
  }

  //   console.log(number, type, 'isTypeCorrect', isTypeCorrect)

  return isTypeCorrect;
}