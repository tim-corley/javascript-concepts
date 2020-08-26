## LINKED LISTS

### -ADVANTAGES-

- not restricted to a declared number of elements
- can easily insert & remove elements without reallocation or reorganization of the entire structure (data items need not be stored contiguously)

### -DISADVANTAGES-

- must access nodes sequentially starting from the first one (cannot do a binary search on a linked list)
- searching for element is slow (operations have linear complexity O(n))
- extra memory space for a link is required for each element of the list

### -SINGLY-

- only points to next node

### -DOUBLY-

- points to both next & previous nodes

### -CIRCULAR-

- all nodes connected to form circle

### -GENERAL STRUCTURE-

- stores values sequentially
- single chain of nodes connected by pointers
- should create methods inside the prototype (e.g. LinkedList.prototype.addNodeAtStart)
- will likely create many objects, would need to duplicate all methods for each if not using prototype

### -PERFORMANCE-

- adding & removing operations complexity remains constant O(1) - regardless of how many nodes are in the list, it always will be performed in constant time
- accessing & searching operatons complexity is linear O(n) - will grow in direct proportion to the size of the input data

### -USE CASES-

- implement a stack & a queue (other types of data structures)
- image / video gallery with 'next' & 'previous' functionality
- undo & redo behavior (photoshop, docs, word)

### -COMMON OPERATIONS-

- add node at head
- add node at tail
- add node at random position
- delete node at head
- delete node at tail
- delete node at random position
- search/find a node by position
- search/find a node by value

### -CODE-

#### Node Class

```javascript
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
```

#### LinkedList Class

```javascript
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}
```

#### Add Node to Head

```javascript
addToHead(data) {
    this.head = new Node(data, this.head);
}
```

#### Add Node to Tail

```javascript
addToTail(data) {
    const node = new Node(data);
    let tail = null;
    // if empty (i.e. no head node), node will be head
    if (!this.head) {
        this.head = node;
    } else {
        tail = this.head;
        // loop through list to find tail
        while (tail.next) {
            tail = tail.next;
        }
        // update tails next pointer to new tail node
        tail.next = node;
    }
    this.size++;
}
```

#### Add Node to Random Position

```javascript
addAt(data, index) {
    // if empty...
    if (!this.head) {
        this.head = new Node(data);
        return;
    }
    // if insert at head...
    if (index === 0) {
        this.addToHead(data);
        return
    }
    let node = new Node(data);
    let current, previous
    let count = 0
    current = this.head;
    while (count < index) {
        previous = current;
        count++;
        current = current.next;
    }
    node.next = current;
    previous.next = node;
    this size++
}
```

#### Create New Linked List

```javascript
const fooList = new LinkedList();
fooList.addToHead('alpha');
fooList.addToHead('bravo');
fooList.addToTail('yankee');
fooList.addToTail('zulu');
fooList.addAt('kilo', 2);
fooList.addAt('lima', 3);
console.table(fooList);
console.log(fooList.size)
}
```

#### -RESOURCES-

- https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
- https://medium.com/front-end-weekly/data-structures-linked-list-implementation-in-js-3beb48ff49cd
- https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54
- https://dev.to/blarzhernandez/understanding-and-implementing-linked-lists-in-javascript-with-es6-5e5k
- https://dev.to/blarzhernandez/understanding-and-implementing-linked-lists-in-javascript-with-es6-implementation-4nif

```

```
