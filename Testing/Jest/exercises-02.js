// HELPER
const formatStr = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

const exercises = {
  longestWord: (sen) => {
    let longest = '';
    let split = sen.split(' ');
    split.forEach((word) => {
      if (word.length > longest.length) {
        longest = word;
      }
    });
    return longest;
  },
  longestWord02: (sen) => {
    // const wordArr01 = sen.toLowerCase().match(/[a-z0-9]+/g);
    // console.log(wordArr01);
    console.log(sen);
    const wordArr02 = sen.split(' ');
    console.log(wordArr02);
    const sortedArr = wordArr02.sort((a, b) => b.length - a.length);
    console.log(sortedArr);
    // put longest words into an array
    const longestWordArr = sortedArr.filter((word) => {
      return word.length === sortedArr[0].length;
    });
    console.log(longestWordArr);
    if (longestWordArr.length === 1) {
      // return the string
      return longestWordArr[0];
    } else {
      //return the array
      return longestWordArr;
    }
  },
  chunkArray: (arr, len) => {
    const chunkedArr = [];
    arr.forEach((val) => {
      const chunk = chunkedArr[chunkedArr.length - 1];
      // IF NO CHUNKS (i.e. @ START) OR CHUNK IS AT LIMIT, START NEW CHUNK W/ THE VALUE
      if (!chunk || chunk.length === len) {
        chunkedArr.push([val]);
      } else {
        // ELSE PUSH VALUE TO CURRENT CHUNK
        chunk.push(val);
      }
    });
    return chunkedArr;
  },
  isAnagram: (s1, s2) => formatStr(s1) === formatStr(s2),
};

// test00 = exercises.longestWord('hello my name is tim');
// console.log(test00);

// test01 = exercises.longestWord('i am going to the moon in a rocket spaceship');
// console.log(test01);

// test02 = exercises.longestWord('where is geography class?');
// console.log(test02);

// test03 = exercises.longestWord02('the dog is named sam');
// console.log(test03);

// test04 = exercises.longestWord02('sails on the ships are quite tall');
// console.log(test04);

// test05 = exercises.chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5);
// console.log(test05);

test06 = exercises.isAnagram('elbow', 'below');
console.log(test06);

test07 = exercises.isAnagram('lightning', 'thunder');
console.log(test07);

module.exports = exercises;
