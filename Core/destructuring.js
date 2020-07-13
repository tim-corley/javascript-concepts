// destructuring an array
const arr = [1, 2, 3, 4, 5]
const [one, two] = arr
console.log(one);

// destructuring an object
const actor = {
    firstName: 'Tom',
    lastName: 'Hanks',
    oscarWinner: true,
    age: 64
}

// map firstName to new variable
const { firstName: name, age } = actor
console.log(`${name} is ${age} years old!`);


// destructuring a nested object
const makeItem = () => {
    return {
        data: {
            item: {
                category: 'Shoes',
                size: {
                    US: 10,
                    EU: 44
                }
            }
        },
        status: 'live'
    }
}

// const { data, status } = makeItem();
// console.log(data, status);

const { data: { item: { category, size: { US, EU }}}, status } = makeItem();

console.log(category, US, EU, status);

