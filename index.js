const date = new Date();

console.log(getDateFormat(addDays(date, 5), '.'))


function addDays(date, days) {

  if (date instanceof Date) {
    return new Date(date.getTime() + daysToMs(days))
  } else console.log('Введены неверные данные')

}

function daysToMs(days) {
  return days * 24 * 60 * 60 * 1000
}



// Функции из предыдущего задания - для красоты лога
function getDateFormat(date, separator) {
  if (date instanceof Date) {

    const dayNumber = () => {
      if (date.getDate().toString().length === 2) return date.getDate()
      else return `0${date.getDate()}`
    }

    const monthNumber = () => {
      if (date.getMonth().toString().length === 2) return date.getMonth() + 1
      else return `0${date.getMonth() + 1}`
    }

    return `${dayNumber()}${separator}${monthNumber()}${separator}${date.getFullYear()}`;

  } else {
    console.log('в качестве аргумента переданы неверные данные')
  }
}
