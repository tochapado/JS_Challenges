function anagramGrouping(words) {
  const anagramGroups = new Map();


};

function crescent(arr) {
  for(let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while((j > -1) && (arr[j] > key)) {
      arr[j + 1] = arr[j];
      j = j - 1;
    };

    arr[j + 1] = key;
  };
  return arr;
};

const array = [2, 0, 1, 4, 3, 5];

console.log(crescent(array));