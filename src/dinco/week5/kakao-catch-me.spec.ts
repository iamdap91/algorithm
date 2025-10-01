describe('catch-me', () => {
  function catchMe(c: number, d: number) {
    const cony = { velocity: 1, position: c };
    const brown = { queue: new Set<number>() };
    brown.queue.add(d);

    let i = 1;
    while (cony.position <= 200000) {
      cony.position += cony.velocity;
      cony.velocity++;

      for (const position of [...brown.queue]) {
        switch (cony.position) {
          case position * 2:
          case position - 1:
          case position + 1:
            return i;
          default:
        }

        if (position * 2 < 200000) {
          brown.queue.add(position * 2);
        }

        if (position - 1 < 200000) {
          brown.queue.add(position - 1);
        }

        if (position + 1 < 200000) {
          brown.queue.add(position + 1);
        }
      }

      i++;
    }

    return i;
  }

  class Queue<T> {
    private items: T[] = [];
    private front = 0;
    private uniqueMap = new Set<T>();

    add(item: T): void {
      if (this.uniqueMap.has(item)) {
        return;
      }

      this.uniqueMap.add(item);
      this.items.push(item);
    }

    pop(): T | undefined {
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

  function catchMeV2(c: number, d: number) {
    const cony = { velocity: 1, position: c };
    const brown = { queue: new Queue<number>() };
    brown.queue.add(d);

    let i = 1;
    while (cony.position <= 200000) {
      cony.position += cony.velocity;
      cony.velocity++;

      for (const position of [...brown.queue.getQueue()]) {
        switch (cony.position) {
          case position * 2:
          case position - 1:
          case position + 1:
            return i;
          default:
        }

        if (position * 2 < 200000) {
          brown.queue.add(position * 2);
        }

        if (position - 1 < 200000) {
          brown.queue.add(position - 1);
        }

        if (position + 1 < 200000) {
          brown.queue.add(position + 1);
        }
      }

      i++;
    }

    return i;
  }

  it('solution - set', () => {
    // const result = catchMe(11, 2);
    // const result = catchMe(10, 3);
    // const result = catchMe(51, 50);
    console.time();
    const result = catchMe(550, 500);
    console.log(result);
    console.timeEnd();
  });

  it('solution - queue', () => {
    // const result = catchMeV2(11, 2);
    // const result = catchMeV2(10, 3);
    // const result = catchMeV2(51, 50);
    console.time();
    const result = catchMeV2(550, 500);
    console.log(result);
    console.timeEnd();
  });
});
