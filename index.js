const body = document.body;

//Способ 1
body.innerHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
`;
console.log(body);

//если очищать просто через body.innerHTML = "", в косоль неверно выводится, потому что
//следом идёт добавление этой же формы, в итоге мне подсказали (и даже не жпт) такой способ очистки
window.onload=function(){
    document.body.innerHTML = "";
 }
console.log('должен быть пустой', body);


//Способ 2
const loginLable = createLable('Имя', 'text', 'username', 'Введите ваше имя');
const passwordLabel = createLable('Пароль', 'password', 'password', 'Придумайте пароль');

const formButton = document.createElement('button');
formButton.type = 'sunmit';
formButton.textContent = 'Подтвердить';

const registrationForm = document.createElement('form');
registrationForm.className = 'create-user-form';
registrationForm.append(loginLable, passwordLabel, formButton);

body.prepend(registrationForm);
console.log(body)


function createLable(text, type, name, placeholder) {
   const lable = document.createElement('lable')
   lable.textContent = text;
   const input = document.createElement('input')
   input.type = type;
   input.name = name;
   input.placeholder = placeholder;
   lable.append(input);

   return lable;
}

