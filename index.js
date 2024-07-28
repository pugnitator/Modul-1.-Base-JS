for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
    }
    console.log(i)
  }

let numberOfprompt = 0;   

  while (numberOfprompt < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`);
    }
    numberOfprompt += 1;
    console.log(numberOfprompt)
  }

numberOfprompt = 0;

  do {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`);
    }
    numberOfprompt += 1;
    console.log(numberOfprompt)
  } while (numberOfprompt < 3)