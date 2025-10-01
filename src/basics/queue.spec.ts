describe('queue', () => {
  class Queue<T> {
    private items: T[] = [];
    private front = 0;

    enqueue(item: T): void {
      this.items.push(item);
    }

    dequeue(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }

      const item = this.items[this.front];
      this.front++;

      // 메모리 최적화: 절반 이상이 비어있으면 배열을 정리
      if (this.front > this.items.length / 2) {
        this.items = this.items.slice(this.front);
        this.front = 0;
      }

      return item;
    }

    peek(): T | undefined {
      return this.isEmpty() ? undefined : this.items[this.front];
    }

    isEmpty(): boolean {
      return this.front >= this.items.length;
    }

    size(): number {
      return this.items.length - this.front;
    }

    clear(): void {
      this.items = [];
      this.front = 0;
    }
  }

  it('solution', () => {
    const queue = new Queue<number>();
    console.log(queue.isEmpty()); // true
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const value = queue.dequeue();
    console.log(value); // 1
  });
});

describe('queue', () => {
  class UniqueQueue<T> {
    private items: T[] = [];
    private front = 0;
    private uniqueMap = new Set<T>();

    enqueue(item: T): void {
      if (this.uniqueMap.has(item)) {
        return;
      }

      this.uniqueMap.add(item);
      this.items.push(item);
    }

    dequeue(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }

      const item = this.items[this.front];
      this.uniqueMap.delete(item);
      this.front++;

      // 메모리 최적화: 절반 이상이 비어있으면 배열을 정리
      if (this.front > this.items.length / 2) {
        this.items = this.items.slice(this.front);
        this.front = 0;
      }

      return item;
    }

    size(): number {
      return this.items.length - this.front;
    }

    isEmpty(): boolean {
      return this.front >= this.items.length;
    }

    getQueue() {
      return this.items.slice(this.front);
    }
  }

  it('solution', () => {
    const queue = new UniqueQueue<number>();
    console.log(queue.isEmpty()); // true
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(2);
    queue.enqueue(3);

    console.log(queue.getQueue()); // 1
  });
});
