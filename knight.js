const moves = [
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [-2, 1],
  [2, -1],
  [-2, -1],
];

function move(position, move) {
  const x = position[0] + move[0];
  const y = position[1] + move[1];

  if (x < 0 || y < 0 || x > 7 || y > 7) {
    return "Moved off board";
  }
  return [x, y];
}

move([3, 3], [1, 2]); // [4,5]

function getPossibleMoves(position) {
  const possibilities = [];
  for (const offset of moves) {
    const location = move(position, offset);
    if (Array.isArray(location)) {
      possibilities.push(offset);
    }
  }
  return possibilities;
}

getPossibleMoves([0, 0]); // Possible moves: [1,2], [2,1]

function getPossibleDestinations(position) {
  const possibilities = [];
  for (const offset of moves) {
    const location = move(position, offset);
    if (Array.isArray(location)) {
      possibilities.push(location);
    }
  }
  return possibilities;
}

getPossibleDestinations([3, 0]); // Possible destinations: [1,2], [2,1]

function knightMoves(start, target) {
  const queue = [start];
  const visited = new Set();
  const path = [];
  while (queue.length) {
    const current = queue.shift();
    if (visited.has(current.toString())) {
      continue;
    }
    const possibilities = getPossibleDestinations(current);

    visited.add(current.toString());
    queue.push(...possibilities);
    if (current[0] === target[0] && current[1] === target[1]) {
      return `You made it in ${path.length - 1} moves! Here's your path:`;
    }
  }
}

console.log(knightMoves([0, 0], [2, 4]));
