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
      // console.log(Object.entries(this.words))
      Object.values(this.words).forEach((word) => console.log(`${word.word} - ${word.description}`));
   }
}


const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
console.log(dictionary.get('JavaScript'));

dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
console.log(dictionary.get('Веб-разработчик'));

// dictionary.remove('JavaScript');

dictionary.showAllWords();

