"use strict";

// graph problem (number of islands)

const islandCount = (grid) => {

  const visited = new Set();
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if(explore(grid, r, c, visited)) {
        count += 1;
      }
    }
  }

  return count;
}

const explore = (grid, row, column, visited) => {
  // check if in bounds
  const rowInbounds = 0<=row && row<grid.length;
  const colummnInbounds = 0<=column && column<grid[0].length;
  if(!rowInbounds || !colummnInbounds) return false;
  
  // check if on water
  if(grid[row][column] === 'w') return false;
  
  // check if visited
  const pos = row+','+column;
  if(visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, row-1, column, visited); // go up
  explore(grid, row+1, column, visited); // go down
  explore(grid, row, column-1, visited); // go left
  explore(grid, row, column+1, visited); // go right

  return true;
}

const grid = [
  ['w', 'L', 'w', 'w', 'w'],
  ['w', 'L', 'w', 'w', 'w'],
  ['L', 'w', 'w', 'L', 'w'],
  ['w', 'w', 'L', 'L', 'w'],
  ['L', 'w', 'w', 'L', 'L'],
  ['L', 'L', 'w', 'w', 'w']
]

console.log(islandCount(grid));