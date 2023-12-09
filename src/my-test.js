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

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

console.log(queue.dequeue()); // 5
console.log(queue.getUnderlyingList()); // возвращает список
