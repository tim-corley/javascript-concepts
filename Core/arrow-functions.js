// implicit return
const demoFunc = () => 'foo'

console.log(demoFunc());


// must use regular function within an object (as an object method) since scope of 'this' is inherited from the execution context 
const team = {
    name: 'Celtics',
    city: 'Boston',
    wins: 32,
    losses: 9,
    teamRecord: function() {
        return `The ${this.city} ${this.name} have a record of: ${this.wins} - ${this.losses}.`
    },
    homeTown: () => {
        return `From city of: ${this.city}.`
    }
}

console.log(team.teamRecord()) // regualr function - works
console.log(team.homeTown()); // arrow function - won't work
