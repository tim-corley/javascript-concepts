// class definition
class Person {
    constructor(name) {
        this.name = name
    }

    hello() {
        return`Hello, I am ${this.name}. What's your name?`;
    }
}

// initalize
const charlie = new Person('Charlie')
const logHello = charlie.hello()
console.log(logHello);

// inheritance 
class Developer extends Person {
    hey() {
        return super.hello() + ' I am a developer.'
        
    }
}

const dennis = new Developer('Dennis')
const logHey = dennis.hey()
console.log(logHey);

// static methods
class Docs {
    static genericName() {
        return 'document-00'
    }
}

console.log(Docs.genericName());


// getters & setters 
class Movie {
    constructor(title, year) {
        this.title = title
        this.year = year
    }

    set newTitle(_val) {
        this.title = _val
    }

    get getTitle() {
        return this.title
    }
}

const newRelease = new Movie('Tenet', 2020)
console.log(newRelease.getTitle);

newRelease.newTitle = 'tenet 2'
console.log(newRelease.getTitle);


