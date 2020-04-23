// https://itnext.io/singly-linked-lists-in-javascript-d7a994eab505
// SINGLY LINKED LIST

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // insert new node at end of list
  add(data) {
    const node = new Node(data);
    let currNode = this.head;

    // if list is empty, add new node as first...
    if (!currNode) {
      this.head = node;
      this.length++;
      return node;
    }
    // if nodes already exist in the list...
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = node;
    this.length++;
    return node;
  }

  remove(index) {
    let currNode = this.head;
    const length = this.length;
    let count = 0;

    if (index < 0 || length === 0 || index > length) {
      throw new Error('INVALID LIST CONDITIONS: invalid index supplied');
    }

    // if the first node is being removed...
    if (index === 0) {
      this.head = currNode.next;
      const deletedNode = currNode;
      currNode = null;
      this.length--;
      return deletedNode;
    }

    // if any other node being removed...
    let nodePrior;
    let nodeToDelete;

    while (count < index) {
      nodePrior = currNode;
      nodeToDelete = currNode.next;
      count++;
    }

    nodePrior.next = nodeToDelete.next;
    this.length++;
    return nodeToDelete;
  }

  find(index) {
    let currNode = this.head;
    const length = this.getLength();
    let count = 0;

    if (length === 0 || index > length) {
      throw new Error('INVALID NODE');
    }

    while (count < index) {
      currNode = currNode.next;
      count++;
    }
    return currNode;
  }

  // HELPERS
  getLength() {
    return this.length;
  }

  printList() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `${current.data} --> `;
      current = current.next;
      if (!current) {
        str += 'end';
      }
    }
    console.log(str);
  }
}

const sampleList = new SList();
sampleList.add('a');
sampleList.add('b');
sampleList.add('c');
sampleList.add('d');
sampleList.add('e');
sampleList.add('f');
sampleList.printList();
console.log('REMOVING ITEM...');
sampleList.remove(2);
sampleList.printList();
console.log('FINDING ITEM...');
found = sampleList.find(4);
console.log(found);
