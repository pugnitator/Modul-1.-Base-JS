const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map(item => item * 1.5);

updatedPrices.forEach((item, index) => alert(`Кофе ${coffees[index]} сейчас стоит ${item} евро`))