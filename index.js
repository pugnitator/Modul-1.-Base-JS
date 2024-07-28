const question1 = 'Сколько будет 2 + 2?';
const correctAnswer1 = 4;

const question2 = 'Сколько будет 2 * 2?';
const correctAnswer2 = 4;

const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?';
const correctAnswer3 = 1;

const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
const correctAnswer4 = 12;

const question5 = 'Сколько будет 2 + 2 * 2?';
const correctAnswer5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

userAnswer1 = Number(prompt(question1));
if (userAnswer1 === correctAnswer1) {
    correctAnswers += 1;
    alert('Ответ верный!');
} else {
    incorrectAnswers += 1;
    alert('Ответ неверный.');
}

userAnswer2 = Number(prompt(question2));
if (userAnswer2 === correctAnswer2) {
    correctAnswers += 1;
    alert('Ответ верный!');
} else {
    incorrectAnswers += 1;
    alert('Ответ неверный.');
}

userAnswer3 = Number(prompt(question3));
if (userAnswer3 === correctAnswer3) {
    correctAnswers += 1;
    alert('Ответ верный!');
} else {
    incorrectAnswers += 1;
    alert('Ответ неверный.');
}

userAnswer4 = Number(prompt(question4));
if (userAnswer4 === correctAnswer4) {
    correctAnswers += 1;
    alert('Ответ верный!');
} else {
    incorrectAnswers += 1;
    alert('Ответ неверный.');
}

userAnswer5 = Number(prompt(question5));
if (userAnswer5 === correctAnswer5) {
    correctAnswers += 1;
    alert('Ответ верный!');
} else {
    incorrectAnswers += 1;
    alert('Ответ неверный.');
}

alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`);