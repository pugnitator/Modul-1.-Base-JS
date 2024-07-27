// 1 
// NaN
// По факту проверки: NaN
console.log(Number(' 1 2 3 4 5'));


// 2 
// NaN
// По факту проверки: NaN
console.log(Number('1234 5'));


// 3 
// 12345 - number
// По факту проверки: 12345
console.log(Number('12345'));


// 4 
// 'false'
// По факту проверки: 'false'
console.log(String(false));


// 5 
// false
// По факту проверки: false
console.log(Boolean(0000000));  


// 6 
// true
// По факту проверки: true
console.log(Boolean(0.0000001));


// 7 
// 'undefined'
// По факту проверки: 'undefined'
console.log(String(undefined));


// 8 
// NaN
// По факту проверки: NaN
console.log(Number('100f'));


// 9 
// 100
// По факту проверки: 100
console.log(Number('100'));


// 10 
// 1
// По факту проверки: 1
console.log(Number('000001'));