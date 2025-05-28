function getAdjacentKeys(key) {
  const adjacencyList = {
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    8: ["5", "7", "8", "9", "0"],
    9: ["6", "8", "9"],
    0: ["8", "0"],
  };
  return adjacencyList[key] || [];
}

function backtrack(pin, index, currentCombination, results) {
  if (index === pin.length) {
    results.push(currentCombination.join(""));
    return;
  }

  const currentKey = pin[index];
  const adjacentKeys = getAdjacentKeys(currentKey);

  for (const key of adjacentKeys) {
    currentCombination.push(key);
    backtrack(pin, index + 1, currentCombination, results);
    currentCombination.pop();
  }
}

function solution(pin) {
  // Asegúrate de que pin es string
  pin = String(pin);
  const results = [];
  backtrack(pin, 0, [], results);
  return results.sort();
}

module.exports = solution;
