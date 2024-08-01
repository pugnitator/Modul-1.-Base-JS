const peopleWaiting = ["Кристина", "Олег", "Кирилл", "Мария", "Светлана", "Артем", "Глеб",];

//Кристина, Олег и Кирилл получают посылки
for (let i = 0; i <= 2; i++) {
  giveParcel(peopleWaiting);
}

//чувачки покидают офис почты
while (peopleWaiting.length > 0) {
  // console.log(peopleWaiting);
  leaveQueueWithoutParcel(peopleWaiting);
}

function giveParcel(listOfPeople) {
  if (listOfPeople.length === 0) alert("Некому выдавать посылочки");
  else {
    let name = listOfPeople.shift();
    alert(`${name} получил(а) посылку. В очереди осталось ${listOfPeople.length} человек.`)
  }
}

function leaveQueueWithoutParcel(listOfPeople) {
  let name = listOfPeople.pop();
  alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);
}
