// destructuring a nested object

const makeItem = () => {
    return {
        data: {
            item: {
                name: 'Shoes',
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

const { data: { item: { name, size: { US, EU }}}, status } = makeItem();

console.log(name, US, EU, status);

