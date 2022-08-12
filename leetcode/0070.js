// -계단오르기
// 입력받은 숫자 만틈 계단을 오른다. 계단은 한 번에 1칸 또는 2칸 오를 수 있다.
// 경우의 수를 리턴하라.
/**
 * @param {number} n
 * @return {number}
 */

/** 해결 방법 : 1칸씩만 오른 경우를 제외하고 나머지 경우의 수를 조합으로 생각
 *  개선점 : 입력값이 45이하라는 조건이 있어서 지금은 런타임에러가 없지만,
 *          입력받는 숫자가 커지면 에러 발생 가능
 *          -> 시간복잡도 고민 필요
 */
var climbStairs = function (n) {
  let answer = 1;
  let memo = Array.from(Array(45), () => Array(45).fill(0));

  function DFS(n, r) {
    if (memo[n][r]) return memo[n][r];
    if (n === r || r === 0) return 1;
    else return (memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  n = n - 1;
  let r = 1;
  while (n >= r) {
    answer = answer + DFS(n, r);
    n--;
    r++;
  }

  return answer;
};

/** 해결 방법 : 숫자를 살펴보니 1=1, 2=2, 3=3, 4=5, 5=8, 6=13...
 *             숫자의 증가세가 피보나치 수열과 똑같았다.
 */
var climbStairs = function (n) {
  let memo = [1, 1]; //0과 1번째 인덱스의 값은 1

  for (let i = 2; i <= n; i++) {
    //나머지 인덱스의 값들은 for문을 돌려서 넣어줌
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
};
