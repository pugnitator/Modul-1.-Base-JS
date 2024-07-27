let userName = prompt('Как вас зовут?').toLocaleLowerCase().trim();
let userAge = Number(prompt('Сколько вам лет?').trim());
alert(`Вас зовут ${userName} и вам ${userAge} лет`);