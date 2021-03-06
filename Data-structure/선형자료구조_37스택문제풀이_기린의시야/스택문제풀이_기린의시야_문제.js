/* 기린의 시야 */
if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

/* user code */
function answer(giraffe) {
  let result = 0;
  let stack = [];

  giraffe.push(Number.MAX_SAFE_INTEGER);

  let index = 0;

  for (let i = 0; i < giraffe.length; i++) {
    while (!stack.isEmpty() && stack.peek()['h'] < giraffe[i]) {
      result += i - stack.pop()['index'] - 1;
    }

    stack.push({ h: giraffe[i], index: i });
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [10, 3, 7, 4, 12, 2],

  // TC: 2
  [7, 4, 12, 1, 13, 11, 12, 6],

  // TC: 3
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
