
console.log(getSumOfSequence(5))

function getSumOfSequence(number) {
  const sequence = [];

  for (i = 1; i <= number; i++) {
    sequence.push(i);
    console.log(sequence);
  }

  // console.log(sequence.at(0), sequence.at(-1));
  return sequence.at(0) + sequence.at(-1);

}