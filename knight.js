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

console.log(move([3, 3], [1, 2])); // [4,5]

function getPossibleMoves(position) {
  const possiblities = [];
  for (const offset of moves) {
    const location = move(position, offset);
    if (Array.isArray(location)) {
      possiblities.push(offset);
    }
  }
  return possiblities;
}

console.log(getPossibleMoves([0, 0])); // Possible moves: [1,2], [2,1]

function getPossibleDestinations(position) {
  const possiblities = [];
  for (const offset of moves) {
    const location = move(position, offset);
    if (Array.isArray(location)) {
      possiblities.push(location);
    }
  }
  return possiblities;
}

console.log(getPossibleDestinations([3, 0])); // Possible destinations: [1,2], [2,1]
