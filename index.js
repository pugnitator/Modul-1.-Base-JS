const date = new Date(2021, 1, 2);

console.log(getDateFormat(date, '*'));

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