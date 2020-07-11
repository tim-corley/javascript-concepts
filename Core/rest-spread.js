// BASIC DESTRUCTURING
console.log('\n --- BASIC DESTRUCTURING ---\n');

// arrays
const myList = ['alpha','bravo','charlie','delta','echo']
// leave space between commas to skip
const [first,,third] = myList
console.log(first)
console.log(third)

// function returns
const sumAndMult = (x, y) => [x + y, x * y]

const noDestruct = sumAndMult(4, 5)
const [sum, mult, div = 'No Division'] = sumAndMult(4, 5)

console.log(noDestruct)
console.log(sum)
console.log(mult)
console.log(div) // has a 'default value'

// objects
const personOne = {
    name: 'Mac',
    age: 38,
    location: {
        city: 'Los Angeles',
        state: 'California'
    }
}

const personTwo = {
    name: 'Dee',
    age: 36,
    location: {
        city: 'New York City',
        state: 'New York'
    }
}

// not using position (like arrays) so inputs must match property name
const { name, age, location: { city } } = personOne

console.log(name)
console.log(age)
console.log(city);


// map value to a new variable
const { name: firstName, ...restObj } = personTwo
console.log(firstName)
console.log(restObj);

const personA = {
    name: 'Frank',
    age: 60,
    owner: true
}

const personB = {
    age: 45,
    location: {
        city: 'Boston',
        state: 'Massachusetts'
    }
}

const personC = { ...personA, ...personB }
console.log(personC);

// passing objects into functions

// without destructuring
const printUser01 = (user) => console.log(`name is: ${user.name} & age is: ${user.age}`);
printUser01(personOne)

// with destructuring
const printUser02 = ({ name, age }) => console.log(`name is: ${name} & age is: ${age}`);
printUser02(personTwo)

// with destructuring & default value
const printUser03 = ({ name, age, isDefault = true }) => console.log(`name is: ${name} & age is: ${age}. Are we using a default value: ${isDefault}`);
printUser03(personOne)



// SPREAD OP
console.log('\n --- SPREAD OPERATOR ---\n');

const myArr = ['bravo', 'charlie', 'delta']
const newArr = ['alpha', ...myArr, 'echo']
console.log(newArr);


// arrays
const a = [3, 6, 9]
// create a new array
const b = [...a, 7, 10, 11]
// create a copy of an array
const c = [...a]

console.log(a);
console.log(b);
console.log(c);


//objects 
const oldObj = {
    item: 'foo',
    place: 'bar'
}

const newObj = { ...oldObj }

console.log(newObj);


// strings
const h = 'Hello'
// create array from strong, each char is an item
const arrayized = [...h]

console.log(arrayized);

// use case: quickly/easily pass array into a function
const f = (foo, bar, par) => {
    return `${foo} | ${bar} | ${par}`
}
const test = ['alpha', 'bravo', 'charlie']
console.log(f(...test))

// another function example
const addFunc = (a, b, c) => {
    return a + b + c
}
const args = [2, 4, 8]
console.log(addFunc(...args))

// REST PARAM
console.log('\n --- REST PARAMETER ---\n');

// without rest (only first two args are taken)
const add = (x, y) => x + y;
const noRest = add(2, 3, 5)
console.log(noRest); // 5

// with rest (gather all args into an array)
const addAgain = (...args) => {
    let result = 0;
    for (let a of args ) result += a;
    return result
}

const withRest = addAgain(2, 3, 5)
console.log(withRest);

// using array methods w/ rest param
const restTest = (x, y, ...z) => {
    console.log(z.length);
    console.log(z.includes('hello'));
    const f = z.filter(word => word.length > 5);
    console.log(f);
}

restTest('hi', 'hey', 'howdy', 'hola', 'hello', 'greetings')

// rest properties
const { front, second, ...more } = {
    front: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5
}

console.log(front);
console.log(second);
console.log(more);

// spread properties
const items = { front, second, ...more}
console.log(items);








