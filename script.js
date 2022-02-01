"use strict";

// Solving Graph problems (Undirected Path)

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  console.log(hasPath(graph, nodeA, nodeB, new Set()));
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const hasPath = (graph, src, dst, visitedNodes) => {
  if (src === dst) return true;

  if (visitedNodes.has(src)) return false;

  visitedNodes.add(src);

  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst, visitedNodes) === true) {
      return true;
    }
  }
  return false;
};

const edges1 = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const edges2 = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

const edges3 = [
  ["s", "r"],
  ["t", "q"],
  ["q", "r"],
];

// test_00
undirectedPath(edges1, "j", "m");

// test_01
undirectedPath(edges1, "m", "j"); // -> true

// test_02:
undirectedPath(edges1, "l", "j"); // -> true

// test_03:
undirectedPath(edges1, "k", "o"); // -> false

// test_04:
undirectedPath(edges1, "i", "o"); // -> false

// test_05:
undirectedPath(edges2, "a", "b"); // -> true

// test_06:
undirectedPath(edges2, "a", "c"); // -> true

// test_07:
undirectedPath(edges2, "r", "t"); // -> true

// test_08:
undirectedPath(edges2, "r", "b"); // -> false

// test_09:
undirectedPath(edges3, "r", "t"); // -> true
