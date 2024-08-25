class Dictionary {
   constructor(name) {
      this.name = name;
      this.words = {};
   }

   add(word, description) {
      if(word in this.words) console.log('такое слово уже есть в словаре');
      else {
         this.words[word] = {
            word: `${word}`,
            description: `${description}`,
         }
      }
   }

   remove(word) {
      delete this.words[word]
   }

   get(word) {
      return this.words[word]
   }

   showAllWords() {
      Object.values(this.words).forEach((word) => console.log(`${word.word} - ${word.description}`));
   }
}

// Задание 4
class HardWordsDictionary extends Dictionary {
   constructor(name) {
      super(name);
   }

   add(word, description) {
      if(word in this.words) console.log('такое слово уже есть в словаре');
      else {
         this.words[word] = {
            word: `${word}`,
            description: `${description}`,
            isDifficalt: true,
         }
      }
   }

}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'); 
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.'); 
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 

console.log(hardWordsDictionary);
    
// hardWordsDictionary.remove('неологизм');
console.log(hardWordsDictionary);

hardWordsDictionary.showAllWords();





