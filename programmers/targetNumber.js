function solution(numbers, target) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    //부호 위치
    for (let j = 0; j < numbers.length; j++) {
      //배열 인덱스
      let newArr = numbers;
      newArr[i] = -newArr[i];
      if (newArr.reduce((a, b) => a + b) === target) {
        answer++;
      }
    }
  }
  return answer;
}

// 0점입니다.
