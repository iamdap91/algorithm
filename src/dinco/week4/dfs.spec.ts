describe('dfs', () => {
  function dfsByRecursion(graph: Record<number, number[]>) {
    const visited = new Set<number>();
    const orders = [];

    function recursion(node: number) {
      const current = graph[node];
      switch (true) {
        case !current:
        case visited.has(node):
          return;
      }
      visited.add(node);
      orders.push(node);

      for (const adjacentNode of current) {
        recursion(adjacentNode);
      }
    }

    recursion(+Object.keys(graph)[0]);
    return orders;
  }

  function dfsByStack(graph: Record<number, number[]>) {
    const rootNode = +Object.keys(graph)[0];
    const stack = [rootNode];
    const visited = new Set<number>();
    visited.add(rootNode);
    const visitOrders: number[] = [];

    while (stack.length > 0) {
      const currentNode = stack.pop(); // currentNode
      visitOrders.push(currentNode);
      for (const adjacentNode of graph[currentNode]) {
        if (!visited.has(adjacentNode)) {
          stack.push(adjacentNode);
          visited.add(adjacentNode);
        }
      }
    }

    return visitOrders;
  }

  it('solution - recursion', () => {
    const graph = {
      1: [2, 5, 9],
      2: [1, 3],
      3: [2, 4],
      4: [3],
      5: [1, 6, 8],
      6: [5, 7],
      7: [6],
      8: [5],
      9: [1, 10],
      10: [9],
    };

    const result = dfsByRecursion(graph);
    console.log(result);
  });

  it('solution - stack', () => {
    const graph = {
      1: [2, 5, 9],
      2: [1, 3],
      3: [2, 4],
      4: [3],
      5: [1, 6, 8],
      6: [5, 7],
      7: [6],
      8: [5],
      9: [1, 10],
      10: [9],
    };

    const result = dfsByStack(graph);
    console.log(result);
  });
});
