describe('bfs', () => {
  function bfs(graph: Record<number, number[]>) {
    const rootNode = +Object.keys(graph)[0];
    const queue = [rootNode];
    const visited = new Set<number>();
    visited.add(rootNode);
    const visitOrders: number[] = [+Object.keys(graph)[0]];

    while (queue.length > 0) {
      const currentNode = queue.shift(); // currentNode
      visitOrders.push(currentNode);

      for (const adjacentNode of graph[currentNode]) {
        // 방문하지 않은 노드라면
        if (!visited.has(adjacentNode)) {
          visited.add(adjacentNode);
          queue.push(adjacentNode);
        }
      }
    }

    return visitOrders;
  }

  it('solution', () => {
    const graph = {
      1: [2, 3, 4],
      2: [1, 5],
      3: [1, 6, 7],
      4: [1, 8],
      5: [2, 9],
      6: [3, 10],
      7: [3],
      8: [4],
      9: [5],
      10: [6],
    };

    const result = bfs(graph);
    console.log(result);
  });
});
