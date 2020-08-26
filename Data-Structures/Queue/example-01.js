function Queue() {
  let storage = {},
    head = 0,
    tail = 0;

  return {
    enQueue: function (item) {
      storage[tail] = item;
      tail++;
    },
    deQueue: function () {
      let size = tail - head;
      if (size <= 0) return undefined;
      let item = storage[head];
      delete storage[head];
      head++;

      if (head === tail) {
        head = 0;
        tail = 0;
      }
      return item;
    },
    size: function () {
      return Object.keys(storage).length;
    },
    print: function () {
      let result = [];
      for (let key in storage) {
        result.push(storage[key]);
      }
      return result;
    },
  };
}

let myQueue = new Queue();
myQueue.enQueue(['a', 'b', 'c']);
myQueue.enQueue('more things');
myQueue.enQueue(500);
console.log(myQueue.print());
console.log(myQueue.size());
myQueue.deQueue();
console.log(myQueue.print());
console.log(myQueue.size());
