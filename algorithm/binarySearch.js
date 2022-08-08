// target index값 찾기

// Iteration Method
function basicBinarySearch(arr, x, low = 0, high = arr.length - 1) {
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (x === arr[mid]) return mid;
    else if (x > arr[mid]) low = mid + 1;
    else high = mid - 1;
  }
}

// Recursive Method
function recursiveBinarySearch(arr, x, low = 0, high = arr.length - 1) {
  if (low > high) {
    return false;
  } else {
    let mid = parseInt((low + high) / 2);
    if (x === arr[mid]) {
      return mid;
    } else if (x > arr[mid]) {
      return recursiveBinarySearch(arr, x, mid + 1, high);
    } else {
      return recursiveBinarySearch(arr, x, low, mid - 1);
    }
  }
}

// 배열 요소 중 극댓값 찾기

// Iteration Method
function basicBinarySearch(arr, x, low = 0, high = arr.length - 1) {
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (x === arr[mid]) return mid;
    else if (x > arr[mid]) low = mid + 1;
    else high = mid - 1;
  }
}
