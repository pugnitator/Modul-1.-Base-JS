const userString = prompt('Введите текст для обрезки').trim();
const startSliceIndex = Number(prompt('Введите индекс, c которого нужно начать обрезку строки'));
const endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки'));

const string = userString.slice(startSliceIndex, endSliceIndex + 1);
alert(string);