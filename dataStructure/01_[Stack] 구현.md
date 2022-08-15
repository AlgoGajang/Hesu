# [**01\_[Stack] 구현**](https://urclass.codestates.com/classroom/20)Implementation Stack

Stack 구현을 위한 기본적인 코드가 작성되어 있습니다. Stack 자료구조의 특성을 이해하고 `FILL_ME_IN`을 채워 테스트를 통과해 주세요.

## 멤버 변수

- 데이터를 저장할`Object` 타입의 storage
- 마지막에 들어온 데이터를 가리키는`Number` 타입의 포인터 top

## 메서드

- size(): 스택에 추가된 데이터의 크기를 리턴해야 합니다.
- push(): 스택에 데이터를 추가할 수 있어야 합니다.
- pop(): 가장 나중에 추가된 데이터를 스택에서 삭제하고 삭제한 데이터를 리턴해야 합니다.

## **주의 사항**

- 내장 객체 Array.prototype에 정의된 메서드는 사용하면 안 됩니다.
- 포인터 변수 top의 초기값은`-1, 0, 1`등 임의로 지정할 수 있지만 여기서는`0`으로 하여 데이터가 추가될 위치를 가리키도록 합니다.

## **사용 예시**

```javascript
const stack = new Stack();
stack.size(); // 0
for(let i = 1; i < 10; i++) {
stack.push(i);
}
stack.pop(); // 9
stack.pop(); // 8
stack.size(); // 7
stack.push(8);
stack.size(); // 8
...
```

## 풀이

Stack은 가장 마지막으로 들어간 데이터가 가장 첫 번째로 나오는 성질을 가진 자료 구조.

재귀적인 함수, 알고리즘, 웹 브라우저 방문 기록 등에 사용하고,

삽입 및 삭제는 O(1), 탐색은 O(n)이 걸린다.

```javascript
class Stack {
  constructor() {
    this.storage = {};
    this.top = 0; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
  }

  size() {
    return Object.keys(this.storage).length;
  }

  // 스택에 데이터를 추가 할 수 있어야 합니다.
  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }

  // 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (Object.keys(this.storage).length === 0) {
      return;
    }

    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;

    return result;
  }
}
```
