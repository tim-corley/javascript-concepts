// multiline strings

const str = `Wow
this 
string 
is really
tall!`

console.log(str);


const withSpace = `First Part
                   Second Part`

console.log(withSpace);

const withTrim = `
First Section
Second Section`.trim()

console.log(withTrim);

// interpolation

const isEven = num => num % 2 === 0 ? true : false

const test01 = isEven(3)
const test02 = isEven(4)

console.log(test01);
console.log(test02);

const newStr01 = `something ${isEven(5) ? 'X' : 'Y'}.`
const newStr02 = `something ${isEven(6) ? 'X' : 'Y'}.`
console.log(newStr01);
console.log(newStr02);

