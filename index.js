const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel() {
    if (this.level < 5) {
      this.level += 1;
      switch (this.level) {
        case 2: this.stack.push('CSS');
        break;
        case 3: this.stack.push('JavaScript');
        break;
        case 4: this.stack.push('React');
        break;
        case 5: this.stack.push('NodeJS');
        break;
        default: alert('Error');
      } 
    } else alert('Студент выучил все технологии!');
    
    return student;
  }
}

student
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()

console.log(student)