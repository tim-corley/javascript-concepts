https://medium.com/@mayashavin/ds-queue-implementation-in-js-21ea5914c428

A Queue is a dynamic collection of elements

- element is inserted at end of queue (tail)
- element is removed from the beginning of queue (head)

Basic Queue structure needs to support two main operations:

- EnQueue
- DeQueue

use Object instead of Array to store queue

- shift() takes O(n) running time (n is the size of the queue). While our target running time for DeQueue() should be O(1).
- Most operations in Array Prototype in JS has O(n) running time.
- Array is indexed collection, keeping all data allocated in memory consecutively. In case of large queue, every change will require moving large chunk of memory to keep array accessible using indices.
