// https://medium.com/front-end-weekly/data-structures-linked-list-implementation-in-js-3beb48ff49cd
// SINGLY LINKED LIST
function Node(value) {
  this.value = value;
  this.next = undefined;
}

function SLinkedList() {
  this.head = undefined;
  this.length = 0;
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
  }

  // update head of list & list length
  head = node;
  length++;
}

function Delete(value) {
  // start from head of list
  let curr = head;

  if (head.value === value) {
    head = head.next;
    return;
  }

  // iterate through list to find matching node
  while (curr) {
    // check if next node is the matching one
    if (curr.next) {
      let next = curr.next;
      if (next.value === value) {
        // remove from list & update next pointer if found
        curr.next = next.next;
        length--;
        break;
      }
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
