class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

SLinkedList.prototype.addNodeAtHead = function (data) {
  this.head = new Node(data);
  this.size++;
};

SLinkedList.prototype.addNodeAtTail = function (data) {
  const node = new Node(data);
  this.tail = null;
  if (!this.head) {
    this.head = node;
  } else {
    tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }
  this.size++;
};

sampleList = new SLinkedList();
sampleList.addNodeAtHead('a');
sampleList.addNodeAtTail('b');
console.table(sampleList);
