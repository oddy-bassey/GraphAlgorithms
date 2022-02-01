"use strict";

// NOTE: depth-First-Search is implemented using a stack

// implementing depth-First-Search using an iterative approach
const depthFirstSearchIteratively = (graph, sourceNode) => {
  const stackData = [sourceNode];

  while (stackData.length > 0) {
    // get current Node from stack
    const currentNode = stackData.pop();
    console.log(currentNode);

    // get neighbour nodes of current node
    for (let neighbour of graph[currentNode]) {
      // add neighbours to the stack
      stackData.push(neighbour);
    }
  }
};

// implementing depth-First-Search using a recursive approach
const depthFirstSearchRecursively = (graph, sourceNode) => {
  console.log(sourceNode);

  for (let currentNode of graph[sourceNode]) {
    depthFirstSearchRecursively(graph, currentNode);
  }
};

// NOTE: bredth-first-search is implemented using a queue
const bredthFirstSearchRecursively = (graph, sourceNode) => {
  // add source node to the queue
  const queueData = [sourceNode];

  while (queueData.length > 0) {
    // get current Node from stack
    const currentNode = queueData.shift();
    console.log(currentNode);

    // get neighbour nodes of current node
    for (let neighbour of graph[currentNode]) {
      // add neighbours to the queue
      queueData.push(neighbour);
    }
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

//depthFirstSearchIteratively(graph, "a");
//depthFirstSearchRecursively(graph, "a");
bredthFirstSearchRecursively(graph, "a");
