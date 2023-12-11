const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  root() {
    return this.head;
  }

  add(data) {
    const listNode = { data: data, next: null };

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

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      } else {
        current = current.next;
      }
    }

    return null;
  }

  remove(data) {
    let current = this.head;
    let prev = null;

    if (this.head.data === data) {
      this.head = this.head.next;
      this.length -= 1;
      return this;
    }

    while (current) {
      if (current.data === data) {
        prev.next = current.next;
        this.length -= 1;
        return this;
      } else {
        prev = current;
        current = current.next;
      }
    }
  }

  min() {
    let current = this.head;
    let minimum = current.data;

    if (this.length === 0) {
      return null;
    }

    while (current) {
      if (current.data < minimum) {
        minimum = current.data;
      }
      current = current.next;
    }

    return minimum;
  }

  max() {
    let current = this.head;
    let maximum = current.data;

    if (this.length === 0) {
      return null;
    }

    while (current) {
      if (current.data > maximum) {
        maximum = current.data;
      }
      current = current.next;
    }

    return maximum;
  }
}

module.exports = {
  BinarySearchTree,
};
