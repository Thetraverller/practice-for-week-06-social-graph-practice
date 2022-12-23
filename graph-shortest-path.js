const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}
function aShortestPath(start, end) {
  // Create a queue and enqueue a PATH to the starting node
  const queue = [[start]];
  // Create a set to store visited nodes
  const visited = new Set();
  // While the queue is not empty...
  while (queue.length > 0) {
    // Dequeue the first PATH
    let path = queue.shift();
    // grab the last node from the PATH
    let currentNode = path[path.length - 1];
    if (currentNode === end) {
        console.log("Path: " + path)
        return "Found Node: " + currentNode;
    }
    // and check if it's been visited
    if (!visited.has(currentNode)) {
      // If not, mark it as visited
      visited.add(currentNode);
      // Put paths to all its neighbors in the back of the queue
      let neighbors = adjList[currentNode]
      for (let i = 0 ; i < neighbors.length ; i++) {
        let pathCopy = [...path];
        pathCopy.push(neighbors[i]);
        queue.push(pathCopy);
      }
    }
  }
  return "No path found. *Sad Face*";
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
