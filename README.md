# Knight's Travails

A small JavaScript project that finds the shortest path a knight can take between two squares on an 8x8 chessboard.

## Overview

The Knight's Travails problem asks: given a starting square and a target square, what is the shortest sequence of legal knight moves required to reach the destination?

This project solves the problem using a breadth-first search (BFS), which guarantees the shortest path in an unweighted graph of board positions.

## How it works

- The board is represented as coordinates like `[x, y]`.
- Each knight move is one of the 8 standard L-shaped offsets.
- The program checks that each potential move stays on the board.
- BFS explores positions level by level until it reaches the target square.
- Once the target is found, it reconstructs the route back to the start and prints the full path.

## Example

```javascript
knightMoves([3, 3], [0, 0]);
```

Example output:

```text
You made it in 4 moves! Here's your path:
[3,3]
[4,5]
[2,4]
[0,3]
[0,1]
```

## Run the project

From the project directory:

```bash
node knight.js
```

You can change the starting and ending positions in the final call at the bottom of `knight.js`:

```javascript
knightMoves([3, 3], [3, 3]);
```

Replace those values with your own start and target squares.

## Project structure

- `knight.js` — contains the knight movement logic and path-finding algorithm.

## Notes

This is a classic algorithm exercise and is a great example of using BFS for shortest-path problems in graphs.
