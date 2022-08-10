// 시간복잡도 O(n^2)
/** input : 정수로 이루어진 배열 nums, 정수인 target
 *  output : 더해서 target값을 만들 수 있는 요소 2개의 인덱스 값
 *  해결방법 : target - 첫 요소를 뺀 값을 나머지 배열에서 찾기
 *            -> 있다면 인덱스 반환
 *            -> 없다면 다음 배열값 대입
 *  개선점 :
 *  1. arr.slice()는 매개변수만큼 잘라서 새로운 배열을 반환 = 시간복잡도가 O(n)
 *  2. arr.findIndex()도 마찬가지로 시간복잡도가 O(n)
 *  3. O(n) + O(n) => O(n)지만 for문 안에서 돌아가기 때문에
 *     결론적으로 시간복잡도가 O(n) * O(n) => O(n^2)이 된다.
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let rest = target - nums[i];
    let restIndex = nums.slice(i + 1).findIndex((i) => i === rest);
    if (restIndex !== -1) {
      return [i, restIndex + i + 1];
    }
  }
};

//시간복잡도 O(n)
/** 해결방법 : hashtable
 *  rest = target - 첫 요소를 뺀 값 = target - num1
 *  { rest : num1Index } 값을 객체에 저장
 *  객체에서 num2과 rest가 같다면
 *  num2Index와 rest의 value인 num1Index를 반환
 */
var twoSum = function (nums, target) {
  let num_dict = new Object();
  for (let i = 0; i < nums.length; i++) {
    let rest = target - nums[i];
    if (nums[i] in num_dict) {
      return [num_dict[nums[i]], i];
    } else {
      num_dict[rest] = i;
    }
  }
};
