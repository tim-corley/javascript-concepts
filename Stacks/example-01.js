class Stack {
  constructor() {
    this.stack = {};
    this.size = 0;
  }
}

Stack.prototype.push = function (item) {
  this.stack[this.size] = item;
  this.size++;
};

Stack.prototype.pop = function () {
  if (this.isEmpty()) {
    return undefined;
  }
  this.size--;
  let item = this.stack[this.size];
  delete this.stack[this.size];
  return item;
};

Stack.prototype.isEmpty = function () {
  return this.size === 0;
};

Stack.prototype.peek = function () {
  if (this.isEmpty()) {
    return undefined;
  }
  return this.stack[this.size - 1];
};

Stack.prototype.emptyStack = function () {
  while (!this.isEmpty()) {
    this.pop();
  }
};

const myStack = new Stack();
myStack.push([1, 2, 3]);
console.log(myStack);
myStack.push(['a', 'b', 'c']);
console.log(myStack);
let myPeek = myStack.peek();
console.log(myPeek);
myStack.pop();
console.log(myStack);
myStack.push(['alpha', 'bravo', 'charlie']);
myStack.push({ first: 2, second: 3, third: 4 });
console.log(myStack);
myStack.emptyStack();
console.log(myStack);
