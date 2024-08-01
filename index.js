
findCoffee(prompt('Поиск кофе по названию:'));


function findCoffee (coffeeName) {
  const coffees = ['Latte', 'Cappuccino', 'Americano'];

  const coffeeIndex = coffees.findIndex((item) => {
    return item.toLowerCase() === coffeeName.toLowerCase()
  });

  if (coffeeIndex === -1) {
    alert('К сожалению, такого вида кофе нет в наличии')
  }
  else alert(`Держите ваш любимый кофе ${coffees[coffeeIndex]}. Он ${coffeeIndex + 1} по популярности в нашей кофейне.`)
}