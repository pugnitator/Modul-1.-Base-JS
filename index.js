let existingUserLogin = 'the_best_user';
let existingUserPassword = '12345678';

let userLogin = prompt('Введите логин').trim();
let userPassword = prompt('Введите пароль').trim();

if (userLogin === existingUserLogin && existingUserPassword === userPassword) alert(`Добро пожаловать, ${existingUserLogin}!`)
else alert('Логин и (или) пароль введены неверно');