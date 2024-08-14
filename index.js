
const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
  }
  
  console.log(handleObject(student, 'name', 'get'));
  console.log(handleObject(student, 'age', 'add'));
  console.log(handleObject(student, 'age', 'delete'));
  
  function handleObject(obj, key, action) {
  
    if (action === 'get') { return obj[key]
    } else if (action === 'add') {
        obj[key] = '';
        return obj;
    } else if (action === 'delete') {
        delete obj[key];
        return obj;
    } else {
        return 'Введено неверное значение'
    }
  }