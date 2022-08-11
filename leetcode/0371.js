// 연산자 없이 더하기 add two numbers without using arithmetic operators

/** 문제점 : 내가 생각한 방법에는 연산자가 들어감 */
// 1. 배열로 만들어 reduce 사용
var getSum = function (a, b) {
  nums = [a, b];
  return nums.reduce((a, b) => a + b);
};

// 2. a를 기준으로 b값을 바꿔줌
var getSum = function (a, b) {
  if (a === 0) return b;

  while (a > 0) {
    b++;
    a--;
  }

  while (a < 0) {
    b--;
    a++;
  }

  return b;
};

/** 해결방법 : 비트 연산자
 *- AND (&) : 둘 다 1이면 1, 나머지는 0 
  - OR (|) : 둘 중 하나라도 1이면 1, 둘 다 0이어야 0
  - XOR (^) : 둘 중 하나만 1이어야 1, 둘 다 1이면 0
  - NOT (~) : 1은 0으로, 0은 1로 바꿈
 */
var getSum = function (a, b) {
  while (b != 0) {
    // carry now contains common set bits of a and b
    let carry = a & b;

    // Sum of bits of a and b where at least one of the bits is not set
    a = a ^ b;

    // Carry is shifted by one so that adding it to a gives the required sum
    b = carry << 1;
  }
  return a;
};
//재귀적 구현
function getSum(a, b) {
  if (b === 0) return a;
  else {
    return getSum(a ^ b, (a & b) << 1);
  }
}
