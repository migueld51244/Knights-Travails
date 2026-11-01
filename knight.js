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
  const getPath = () => {
    const path = [];
    let current = target;
    while (current) {
      path.push(current);
      current = previous.get(current.toString());
    }
    return path.reverse();
  };

  const printPath = (path) => {
    for (const position of path) {
      console.log(position);
    }
  };

  const output = () => {
    const path = getPath();
    const moves = path.length - 1;
    console.log(
      `You made it in ${path.length - 1} move${moves === 1 ? "" : "s"}! Here's your path:`,
    );
    printPath(path);
  };
  const queue = [start];
  const visited = new Set([start.toString()]);
  const previous = new Map();
  previous.set(start.toString(), null);
  while (queue.length) {
    // Get last
    const current = queue.shift();
    if (current[0] === target[0] && current[1] === target[1]) {
      output();
      return;
    }
    const possibilities = getPossibleDestinations(current);

    for (const destination of possibilities) {
      if (visited.has(destination.toString())) {
        continue;
      }

      visited.add(destination.toString());
      previous.set(destination.toString(), current);

      queue.push(destination);
    }
  }
}

knightMoves([3, 3], [3, 3]);
