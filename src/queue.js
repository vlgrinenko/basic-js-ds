const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const listNode = { value: value, next: null };

    if (this.length === 0) {
      this.head = listNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = listNode;
    }

    this.length += 1;
  }

  dequeue() {
    const firstNode = this.head;
    this.head = this.head.next;
    this.length -= 1;

    return firstNode.value;
  }
}

module.exports = {
  Queue,
};
