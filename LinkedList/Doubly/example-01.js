function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) return null; // check that there is a head node in the list - if not, return null
  let value = this.head.value;
  this.head = this.head.next;

  if (this.head) this.head.prev = null;
  else this.tail = null;

  console.log(`removeHead RETURN VALUE:${value}`);

  return value;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  let value = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) this.tail.next = null;
  else this.head = null;

  console.log(`removeTail RETURN VALUE:${value}`);

  return value;
};

LinkedList.prototype.searchNode = function (value) {
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === value) return currentNode;
    currentNode = currentNode.next;
  }
  return null;
};

const list = new LinkedList();
list.addToHead(125);
list.addToHead(250);
list.addToHead(500);
list.addToTail(10);
list.addToTail(20);
list.addToTail(30);
console.table(list);
console.log('REMOVING HEAD...');
list.removeHead();
console.table(list);
console.log('REMOVING TAIL...');
list.removeTail();
console.table(list);
console.log('-------');
console.log(list.searchNode(250));
