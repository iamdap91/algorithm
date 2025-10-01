describe('nong-sim.spec.ts', () => {
  class MaxHeap {
    private heap = [NaN];

    push(num: number) {
      this.heap.push(num);

      let currentIndex = this.heap.length - 1;
      while (currentIndex > 1) {
        const parentIndex = Math.floor(currentIndex / 2);

        if (this.heap[parentIndex] >= this.heap[currentIndex]) {
          break;
        }

        // 값 교환
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[parentIndex];
        this.heap[parentIndex] = temp;

        currentIndex = parentIndex;
      }
    }

    pop(): number {
      if (this.heap.length <= 1) return; // 빈 힙 처리

      const removedValue = this.heap[1];
      // 루트를 마지막 요소로 교체하고 마지막 요소 제거
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.pop();

      if (this.heap.length <= 1) return removedValue; // 요소가 하나도 없으면 제거된 값 반환

      // 처리
      let currentIndex = 1;
      while (currentIndex < this.heap.length) {
        const leftChildIndex = currentIndex * 2;
        const rightChildIndex = currentIndex * 2 + 1;
        let largestIndex = currentIndex;

        // 왼쪽 자식과 비교
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex] > this.heap[largestIndex]
        ) {
          largestIndex = leftChildIndex;
        }

        // 오른쪽 자식과 비교
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] > this.heap[largestIndex]
        ) {
          largestIndex = rightChildIndex;
        }

        // 힙 속성이 만족되면 종료
        if (largestIndex === currentIndex) {
          break;
        }

        // 값 교환
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[largestIndex];
        this.heap[largestIndex] = temp;

        currentIndex = largestIndex;
      }

      return removedValue;
    }

    getHeap(): number[] {
      return this.heap;
    }

    get head() {
      return this.heap[1];
    }
  }

  function minimumSupplies(
    stock: number,
    dates: number[],
    quantities: number[],
    k: number,
  ): number {
    let answer = 0;
    let lastAddedDateIndex = 0;
    const maxHeap = new MaxHeap();

    while (stock <= k) {
      while (dates[lastAddedDateIndex] <= stock) {
        maxHeap.push(quantities[lastAddedDateIndex]);
        lastAddedDateIndex += 1;
      }

      answer += 1;
      stock += maxHeap.pop();
    }

    return answer;
  }

  it('solution', () => {
    const result = minimumSupplies(4, [4, 10, 5], [20, 5, 10], 30);
    // const result = minimumSupplies(4, [4, 10, 15, 20], [20, 5, 10, 5], 40);
    // const result = minimumSupplies(2, [1, 10], [10, 100], 11);
    console.log(result);
  });
});
