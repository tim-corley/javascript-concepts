const exercises = {
  reverseString00: (str) => {
    let revStr = '';
    str.split('').forEach((char) => (revStr = char + revStr));
    return revStr;
  },
  reverseString01: (str) => {
    return str.split('').reduce((revStr, char) => char + revStr, '');
  },
  reverseString02: (str) => str.split('').reverse().join(''),
  isPalindrome: (str) => {
    reverse = str.split('').reverse().join('');
    return str === reverse;
  },
  reverseInt: (int) => {
    let stringInt = int.toString().split('').reverse().join('');
    return Number(stringInt);
  },
  capitalizeLetters: (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.substr(1))
      .join(' ');
  },
  fizzbuzz: () => {
    for (let i = 1; i < 100; i++) {
      if (i % 15 === 0) {
        console.log('FizzBuzz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else {
        console.log(i);
      }
    }
  },
};

// test00 = exercises.reverseString00('hello');
// console.log(test00);

// test01 = exercises.reverseString01('bicycle');
// console.log(test01);

// test02 = exercises.reverseString01('telephone');
// console.log(test02);

// test03 = exercises.isPalindrome('racecar');
// console.log(test03);

// test04 = exercises.isPalindrome('hello');
// console.log(test04);

// test05 = exercises.reverseInt('123');
// console.log(test05);

// test05 = exercises.reverseInt('268');
// console.log(test05);

// test06 = exercises.capitalizeLetters('i love javascript');
// console.log(test06);

// test07 = exercises.fizzbuzz();
// console.log(test07);

module.exports = exercises;
