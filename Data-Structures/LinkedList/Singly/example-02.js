// https://medium.com/front-end-weekly/data-structures-linked-list-implementation-in-js-3beb48ff49cd
// DOUBLY LINKED LIST
function Node(value) {
  this.value = value;
  this.next = undefined;
  this.prev = undefined;
}

function DLinkedList() {
  this.head = undefined;
  this.length = 0;
  this.tail = undefined;
}

// COMMON OPERATIONS ON LINKED LISTS:
// - INSERT
// - DELETE
// - SEARCH

function Insert(item) {
  // make ure item to insert is valid
  if (!item) return;

  // create new node to wrap around item data
  let node = new Node(item);

  // check if not first element - if so, update node next pointer to point to old head
  if (head) {
    node.next = head;
    head.prev = node;
  }

  if (!tail) {
    tail = node;
  }

  // update head of list & list length
  head = node;
  length++;
}

function Delete(value) {
  // start from head of list
  let curr = head;

  // iterate through list to find matching node
  while (curr) {
    // check if next node is the matching one
    if (curr.value === value) {
      let prev = curr.prev,
        next = curr.next;

      // update the pointers
      if (prev) {
        prev.next = next;
      } else {
        head = next; // if matched node is the head
      }
      if (next) {
        next.prev = prev;
      } else {
        tail = prev; // if matched node is the tail
      }
      length--;
      break;
    }
    curr = curr.next;
  }
}

function Search(value) {
  let curr = head;
  let found = undefined;

  while (curr) {
    if (curr.value === value) {
      found = curr;
      break;
    }
    curr = curr.next;
  }
  return found;
}
