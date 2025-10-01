describe('josephus-problem.spec.ts', () => {
  class LinkedList<T> {
    head: Node<T>;

    constructor(head?: Node<T>) {
      this.head = head || null;
    }

    append(value: T) {
      if (!this.head) {
        this.head = new Node(value);
        return;
      }

      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }

      cur.next = new Node(value);
    }

    printAll() {
      let cur = this.head;
      while (cur !== null) {
        console.log(cur.value);
        cur = cur.next;
      }
    }

    getNode(index: number) {
      let cur = this.head;
      let curIndex = 0;

      while (cur && curIndex !== index) {
        cur = cur.next;
        curIndex += 1;
      }

      return cur;
    }

    addNode(index: number, value: T) {
      const newNode = new Node(value);
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }

      const prevNode = this.getNode(index - 1);
      const nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = nextNode;
    }

    deleteNode(index: number) {
      if (index === 0) {
        this.head = this.head.next;
      }

      const prev = this.getNode(index - 1);
      const target = prev.next;

      prev.next = target.next;
    }
  }

  class Node<T> {
    constructor(value: T) {
      this.value = value;
    }

    value: T;
    next: Node<T> | null = null;
  }

  function josephusProblem(peoples: number, k: number): number[] {
    // set
    const linkedList = new LinkedList<number>();
    for (let i = 1; i <= peoples; i++) {
      linkedList.append(i);
    }

    // 원형 구조 만들기
    let lastNode = linkedList.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = linkedList.head;

    const result = [];
    let current = linkedList.head;

    while (peoples > 0) {
      // k-1번 이동 (k번째 사람에 도달)
      for (let i = 1; i < k; i++) {
        current = current.next;
      }

      result.push(current.value);

      // 이전 노드 찾기
      let prev = current;
      while (prev.next !== current) {
        prev = prev.next;
      }

      // 노드 제거
      prev.next = current.next;
      current = current.next;

      peoples--;
    }

    return result;
  }

  it('solution', () => {
    const result = josephusProblem(7, 3);
    console.log(result);
  });
});
