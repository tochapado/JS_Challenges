function wordFrequencyCounter(str) {
  const lowerStr = str.toLowerCase();
  const words = lowerStr.split(/\W+/);
  const wordFrequency = new Map();

  for(let i = 0; i < words.length; i++) {
    if(words[i] === '') continue;

    const wordCount = wordFrequency.get(words[i]);



    if(wordCount === undefined) {
      wordFrequency.set(words[i], 1);
    } else {
      const count = wordCount + 1;
      wordFrequency.set(words[i], count)
    }
  };

  return wordFrequency;
};

const str = 'Rola grauda, no natal eh rola grauda';

console.log(wordFrequencyCounter(str));