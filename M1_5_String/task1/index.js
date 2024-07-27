//Task 1
const myName = 'Ekaterina';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен Минин';
const reasonText = 'это интересно';
const numberOfMonth = 1;

console.log(
    'Всем привет! Меня зовут ' + myName + '. Сейчас я изучаю язык программирования ' +
     programmingLanguage + ' на курсе по ' + programmingLanguage + ' у ' + courseCreatorName + '. Я хочу стать веб-разработчиком, потому что '
     + reasonText + '. До этого я изучала ' + programmingLanguage + ' ' + numberOfMonth + ' месяц. Я уверена, что пройду данный курс до конца!'
)

console.log(`Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяц. Я уверена, что пройду данный курс до конца!`);


//Task 2
let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяц. Я уверена, что пройду данный курс до конца!`;

myInfoText = myInfoText
.replaceAll(programmingLanguage, programmingLanguage.toLowerCase())
.replaceAll('курс', 'КУРС');

console.log(myInfoText);

const stringLength = myInfoText.length;
console.log(stringLength, myInfoText[0], myInfoText[stringLength - 1]);
