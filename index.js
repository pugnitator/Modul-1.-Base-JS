const animal = 'cat';
console.log(Number(animal), Boolean(animal), String(animal));

const numberOfCatsPaws = 4;
console.log(Number(numberOfCatsPaws), Boolean(numberOfCatsPaws), String(numberOfCatsPaws));

const isCatAngry = true;
console.log(Number(isCatAngry), Boolean(isCatAngry), String(isCatAngry));

const numberOfKittens = null;
console.log(Number(numberOfKittens), Boolean(numberOfKittens), String(numberOfKittens));

const catsAge = undefined;
console.log(Number(catsAge), Boolean(catsAge), String(catsAge));

const catPopulation = 400_000_000n;
console.log(Number(catPopulation), Boolean(catPopulation), String(catPopulation));

const cat = {
    name: 'Mew',
    age: 3,
};
console.log(Number(cat), Boolean(cat), String(cat));

const catId = Symbol('catsId');
console.log(Boolean(catId), String(catId));
console.log(Number(catId));