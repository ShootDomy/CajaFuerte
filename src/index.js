// const readline = require("readline");
const solution = require("./solution");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Please enter the PIN: ", (pin) => {
  const results = solution(pin);
  console.log(results.join("\n"));
  readline.close();
});
