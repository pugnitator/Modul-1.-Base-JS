const nextBirthdayDate = new Date(2024, 10, 22);

console.log(getDaysBeforeBirthday(nextBirthdayDate));

function getDaysBeforeBirthday(birthday) {
  const today = new Date();
  return convertMsToDays(birthday.getTime() - today.getTime())
}

function convertMsToDays(ms) {
  return ms / 1000 / 60 / 60 / 24
}