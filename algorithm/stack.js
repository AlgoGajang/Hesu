class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    return this.arr.push(data);
  }

  pop() {
    return this.arr.pop();
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  botton() {
    return this.arr[0];
  }
}

let a = new Stack();

a.push(1);
a.push(2);
a.push(3);
a.push(50);
a.push(700);
a.pop();
console.log(a);
console.log(a.top());
console.log(a.botton());
