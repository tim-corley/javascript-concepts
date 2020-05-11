function Stack() {
  let stack = {};
  let stackSize = 0;

  return {
    push: function (item) {
      stack[stackSize] = item;
      stackSize++;
    },
    pop: function () {
      if (this.isEmpty()) {
        return undefined;
      }

      stackSize--;

      let item = stack[stackSize];
      delete stack[stackSize];

      return item;
    },
    peek: function () {
      if (this.isEmpty()) {
        return undefined;
      }

      return stack[stackSize - 1];
    },
    stackEmpty: function () {
      while (!this.isEmpty()) {
        this.pop();
      }
    },
    isEmpty: function () {
      return stackSize === 0;
    },
    size: function () {
      return Object.keys(stack).length;
    },
    print: function () {
      let result = [];

      for (let key in stack) {
        result.unshift(stack[key]);
      }

      return result;
    },
  };
}

let test = new Stack();
test.push([1, 2, 3]);
console.log(test.print());
console.log(test.size());
test.push(['a', 'b', 'c']);
console.log(test.print());
console.log(test.size());
test.push({
  taskOne: 'alpha',
  taskTwo: ['bravo', 'charlie'],
  taskThree: 'delta',
});
console.log(test.print());
console.log(test.size());
test.push('NEW');
console.log(test.print());
console.log(test.size());
test.pop();
console.log(test.print());
console.log(test.size());
