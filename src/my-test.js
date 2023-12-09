class Stack {
  constructor() {
    this.arr = [];
  }
  push(element) {
    this.arr.push(element);
  }

  pop() {
    const innerEl = this.arr[this.arr.length - 1];
    this.arr.pop();
    return innerEl;
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);

console.log(stack.peek()); // 7
console.log(stack.pop()); // 7
console.log(stack.peek()); //6
