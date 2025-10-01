describe('doubly-linked-list.spec.ts', () => {
  class DoublyLinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    constructor(head?: Node<T>) {
      this.head = head || null;
      this.tail = head || null;
    }

    append(value: T) {
      const newNode = new Node(value);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }

      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    printAll() {
      let cur = this.head;
      while (cur !== null) {
        console.log(cur.value);
        cur = cur.next;
      }
    }

    printReverse() {
      let cur = this.tail;
      while (cur !== null) {
        console.log(cur.value);
        cur = cur.prev;
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
        if (this.head) {
          this.head.prev = newNode;
        } else {
          this.tail = newNode;
        }
        this.head = newNode;
        return;
      }

      const prevNode = this.getNode(index - 1);
      if (!prevNode) return;

      const nextNode = prevNode.next;

      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;

      if (nextNode) {
        nextNode.prev = newNode;
      } else {
        this.tail = newNode;
      }
    }

    deleteNode(index: number) {
      if (index === 0) {
        this.head = this.head?.next || null;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
        return;
      }

      const target = this.getNode(index);
      if (!target) return;

      if (target.prev) {
        target.prev.next = target.next;
      }

      if (target.next) {
        target.next.prev = target.prev;
      } else {
        this.tail = target.prev;
      }
    }

    getKthNodeFromLast(k) {
      let slow = this.head;
      let fast = this.head;

      for (let i = 0; i < k; i++) {
        fast = fast.next;
      }

      while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
      }

      return slow;
    }
  }

  class Node<T> {
    constructor(value: T) {
      this.value = value;
    }

    value: T;
    next: Node<T> | null = null;
    prev: Node<T> | null = null;
  }

  it('solution', () => {
    const linkedList = new DoublyLinkedList<number>();
    for (let i = 0; i < 3; i++) {
      linkedList.append(i);
    }

    const q = linkedList.getKthNodeFromLast(2);
    console.log(q);

    // console.log('Forward:');
    // linkedList.printAll();
    //
    // console.log('Reverse:');
    // linkedList.printReverse();
  });
});
