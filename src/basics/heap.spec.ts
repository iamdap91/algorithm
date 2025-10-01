describe('max heap', () => {
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

    pop() {
      if (this.heap.length <= 1) return; // 빈 힙 처리

      const removedValue = this.heap[1]; // 제거될 값 저장
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
    }

    getHeap(): number[] {
      return this.heap;
    }

    get head() {
      return this.heap[1];
    }
  }

  it('insertion', () => {
    const maxHeap = new MaxHeap();
    maxHeap.push(3);
    maxHeap.push(4);
    maxHeap.push(2);
    maxHeap.push(9);
    maxHeap.push(8);
    maxHeap.push(6);
    maxHeap.push(7);

    console.log(maxHeap.getHeap());
  });

  it('deletion', () => {
    const maxHeap = new MaxHeap();
    maxHeap.push(8);
    maxHeap.push(6);
    maxHeap.push(7);
    maxHeap.push(2);
    maxHeap.push(5);
    maxHeap.push(4);
    // maxHeap.insert(3);

    maxHeap.pop();

    console.log(maxHeap.getHeap());
  });
});

describe('min heap', () => {
  class MinHeap {
    private heap = [NaN];

    push(num: number) {
      this.heap.push(num);

      let currentIndex = this.heap.length - 1;
      while (currentIndex > 1) {
        const parentIndex = Math.floor(currentIndex / 2);

        if (this.heap[parentIndex] <= this.heap[currentIndex]) {
          break;
        }

        // 값 교환
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[parentIndex];
        this.heap[parentIndex] = temp;

        currentIndex = parentIndex;
      }
    }

    pop() {
      if (this.heap.length <= 1) return; // 빈 힙 처리

      const removedValue = this.heap[1]; // 제거될 값 저장
      // 루트를 마지막 요소로 교체하고 마지막 요소 제거
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.pop();

      if (this.heap.length <= 1) return removedValue; // 요소가 하나도 없으면 제거된 값 반환

      // 처리
      let currentIndex = 1;
      while (currentIndex < this.heap.length) {
        const leftChildIndex = currentIndex * 2;
        const rightChildIndex = currentIndex * 2 + 1;
        let smallestIndex = currentIndex;

        // 왼쪽 자식과 비교
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex] < this.heap[smallestIndex]
        ) {
          smallestIndex = leftChildIndex;
        }

        // 오른쪽 자식과 비교
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] < this.heap[smallestIndex]
        ) {
          smallestIndex = rightChildIndex;
        }

        // 힙 속성이 만족되면 종료
        if (smallestIndex === currentIndex) {
          break;
        }

        // 값 교환
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[smallestIndex];
        this.heap[smallestIndex] = temp;

        currentIndex = smallestIndex;
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

  it('insertion', () => {
    const minHeap = new MinHeap();
    minHeap.push(3);
    minHeap.push(4);
    minHeap.push(2);
    minHeap.push(9);
    minHeap.push(8);
    minHeap.push(6);
    minHeap.push(7);

    console.log(minHeap.getHeap());
  });

  it('deletion', () => {
    const minHeap = new MinHeap();
    minHeap.push(8);
    minHeap.push(6);
    minHeap.push(7);
    minHeap.push(2);
    minHeap.push(5);
    minHeap.push(4);
    minHeap.push(3);

    minHeap.pop();

    console.log(minHeap.getHeap());
  });
});
