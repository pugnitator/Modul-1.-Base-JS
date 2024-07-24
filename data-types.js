const animal = 'cat';
console.log(animal, typeof(animal));

const numberOfCatsPaws = 4;
console.log(numberOfCatsPaws, typeof(numberOfCatsPaws));

const isCatAngry = true;
console.log(isCatAngry, typeof(isCatAngry));

const numberOfKittens = null;
console.log(numberOfKittens, typeof(numberOfKittens));

const catsAge = undefined;
console.log(catsAge, typeof(catsAge));

const catId = Symbol('catsId');
console.log(catId, typeof(catId));

const catPopulation = 400_000_000n;
console.log(catPopulation, typeof(catPopulation));

const cat = {
    name: 'Mew',
    age: 3,
};
console.log(cat, typeof(cat));