"use strict";

// Solving Graph problems (number of connected Components || individual components in a given graph)

const connectedComponentsCount = (graph) => {
  const visitedNodes = new Set();
  let count = 0;
  for (let node in graph) {

    if (explore(graph, node, visitedNodes) == true){
      count += 1;
    }
  }

  return count;
};

const explore = (graph, node, visitedNodes) => {
  if (visitedNodes.has(Number(node))) return 0;

  visitedNodes.add(Number(node));

  for (let neighbour of graph[node]) {
    explore(graph, neighbour, visitedNodes);
  }

  return true;
};

// test_00:
const graph1 = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};
console.log(connectedComponentsCount(graph1)); // -> 4

// test_01:
const graph2 = {
  1: ["2"],
  2: ["1", "8"],
  6: ["7"],
  9: ["8"],
  7: ["6", "8"],
  8: ["9", "7", "2"],
};
console.log(connectedComponentsCount(graph2)); // -> 6

// test_02:
const graph3 = {
  3: [],
  4: ["6"],
  6: ["4", "5", "7", "8"],
  8: ["6"],
  7: ["6"],
  5: ["6"],
  1: ["2"],
  2: ["1"],
};
console.log(connectedComponentsCount(graph3)); // -> 5

// test_03://
console.log(connectedComponentsCount({})); // -> 0

// test_04:
const graph4 = {
  0: ["4", "7"],
  1: [],
  2: [],
  3: ["6"],
  4: ["0"],
  6: ["3"],
  7: ["0"],
  8: [],
};
console.log(connectedComponentsCount(graph4)); // -> 3
