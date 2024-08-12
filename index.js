const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

console.log(giveTalonsInOrder(people, ordersArr));

function giveTalonsInOrder(patients, orders){
let sortPeople = [];
for (let item of orders) {
    sortPeople.push(people.find((patient) => patient.id === item))
}
return sortPeople;
}