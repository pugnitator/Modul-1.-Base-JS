const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
     return 'Гав-Гав';
  }
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
     return 'Чик-чирик';
  }
}

console.log(makeDomestic.bind(dog, true)()); 

console.log(makeDomestic.call(bird, false)); 


function makeDomestic(isDomestic) {
  this.isDomestic = isDomestic;
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  return this;
}