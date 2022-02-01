"use strict";

// Solving Graph problems (Has Path)

// Solution: using depth-first-search
const hasPath1 = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst) === true) {
      return true;
    }
  }
  return false;
};

// Solution: using bredth-first-search
const hasPath = (graph, src, dst) => {
  const queueData = [src];

  while (queueData.length > 0) {
    const currentNode = queueData.shift();

    if (currentNode === dst) return true;

    for (let neighbour of graph[currentNode]) {
      queueData.push(neighbour);
    }
  }

  return false;
};

const graph1 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const graph2 = {
  v: ["x", "w"],
  w: [],
  x: [],
  y: ["z"],
  z: [],
};

console.log("test case0 (src: f, dst: k) -> " + hasPath(graph1, "f", "k"));
console.log("test case0 (src: f, dst: j) -> " + hasPath(graph1, "f", "j"));
console.log("test case1 (src: i, dst: h) -> " + hasPath(graph1, "i", "h"));
console.log("test case2 (src: v, dst: w) -> " + hasPath(graph2, "v", "w"));
console.log("test case3 (src: v, dst: z) -> " + hasPath(graph2, "v", "z"));
