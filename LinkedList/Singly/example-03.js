// https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
// SINGLY LINKED LIST

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
}

// -HELPERS-
// log the list items
SinglyLinkedList.prototype.printList = function () {
  let current = this.head;
  let nodes = '';
  while (current) {
    nodes += `${current.data} -> `;
    current = current.next;
    if (!current) {
      nodes += '<END>';
    }
  }
  console.log(nodes);
};

// get at a provided posisiton
SinglyLinkedList.prototype.getAt = function (index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
};

// A list object is created with a property head, currently pointing at null
let emptyList = new SinglyLinkedList();
console.log(emptyList);

// -INSERT-
// - new node before head (beginning)
// - new node after tail (end)
// - new node at middle of list (at a given random position)

SinglyLinkedList.prototype.insertAtBeginning = function (data) {
  // A newNode object is created with property data and next = null
  let newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  return this.head;
};

SinglyLinkedList.prototype.insertAtEnd = function (data) {
  let newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return this.head; // when head = null (i.e. the list is empty), then head itself will point to new node
  }
  // traverse the list to find the tail (i.e. the node with pointer = null) & update the tails next pointer
  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
  this.length++;
  return this.head;
};

SinglyLinkedList.prototype.insertAt = function (data, index) {
  // if list is empty (i.e. head = null), just create new node...
  if (!this.head) {
    this.head = new Node(data);
    this.length++;
    return;
  }
  // if new node needs to be inserted at front (before head)...
  if (index === 0) {
    this.head = new Node(data, this.head);
    this.length++;
    return;
  }
  // else, use getAt() to find previous node...
  const previous = this.getAt(index - 1);
  let newNode = new Node(data);
  newNode.next = previous.next;
  previous.next = newNode;
  this.length++;
  return this.head;
};

// -DELETE-
// - new node before head (beginning)
// - new node after tail (end)
// - new node at middle of list (at a given random position)
SinglyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    this.length--;
    return;
  }
  this.head = this.head.next;
  this.length--;
  return this.head;
};

SinglyLinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    this.length--;
    return null;
  }
  if (!this.head.next) {
    this.head = null;
    this.length--;
    return;
  }
  let previous = this.head;
  let tail = this.head.next;

  while (tail.next !== null) {
    previous = tail;
    tail = tail.next;
  }
  previous.next = null;
  this.length--;
  return this.head;
};

SinglyLinkedList.prototype.deleteAt = function (index) {
  if (!this.head) {
    this.head = new Node(data);
    this.length++;
    return;
  }
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
    return;
  }
  const previous = this.getAt(index - 1);
  if (!previous || !previous.next) {
    this.length--;
    return;
  }
  previous.next = previous.next.next;
  this.length--;
  return this.head;
};

SinglyLinkedList.prototype.deleteList = function () {
  this.length = 0;
  this.head = null;
};

// -PLAYGROUND-

// initalize a new, empty linked list (singly)
let demoList = new SinglyLinkedList();
// add some nodes to the beggining
demoList.insertAtBeginning('delta');
demoList.insertAtBeginning('charlie');
demoList.insertAtBeginning('bravo');
demoList.insertAtBeginning('alpha');
demoList.printList();
console.log(demoList.length);
// add some nodes to the end
demoList.insertAtEnd('echo');
demoList.insertAtEnd('foxtrot');
demoList.printList();
console.log(demoList.length);

demoList.insertAt('...', 3);
demoList.insertAtEnd('golf');
demoList.insertAt('...', 6);
demoList.printList();
console.log(demoList.length);
demoList.deleteFirstNode();
demoList.printList();
console.log(demoList.length);
demoList.deleteLastNode();
demoList.printList();
console.log(demoList.length);
demoList.deleteAt(2);
demoList.printList();
console.log(demoList.length);
demoList.deleteList();
demoList.printList();
console.log(demoList.length);
