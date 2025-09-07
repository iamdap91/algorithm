const binarySearch = (array: number[], item: number): number => {
  let left = 0;
  let right = array.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // console.log(left, mid, right);

    if (array[mid] === item) {
      return mid;
    }

    if (array[mid] > item) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

function binarySearchRecursive(
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1,
): number {
  // 기본 케이스: 배열의 시작 인덱스가 끝 인덱스보다 크면 요소를 찾을 수 없음
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  // 타겟이 중간 요소와 같으면 인덱스 반환
  if (arr[mid] === target) {
    return mid;
  }

  // 타겟이 중간 요소보다 작으면 왼쪽 절반에서 검색
  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
  // 타겟이 중간 요소보다 크면 오른쪽 절반에서 검색
  else {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
}

it('binary-search', () => {
  const array = Array(100)
    .fill(0)
    .map((_, i) => i + 1);

  const result = binarySearch(array, 10);
  console.log(result);
});
