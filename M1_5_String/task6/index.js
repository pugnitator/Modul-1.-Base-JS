const userText = prompt('Введите текст').trim();
const wordFromText = prompt('Введите слово из текста').trim();

const indexOfWord = userText.includes(wordFromText) ? userText.indexOf(wordFromText) : console.log('Ащибка')
console.log(indexOfWord)

alert(userText.slice(start, indexOfWord).trim());