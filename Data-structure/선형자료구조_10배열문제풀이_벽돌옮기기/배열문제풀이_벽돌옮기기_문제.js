/* 벽돌 옮기기 */

/* user code */
function answer(blocks) {
  const average = blocks.reduce((a, b) => a + b) / blocks.length;

  let result = 0;

  blocks.forEach((num) => {
    if (num < average) {
      result += average - num;
    }
  });

  return result;
}
/* main code */
let input = [
  // TC: 1
  [5, 2, 4, 1, 7, 5],

  // TC: 2
  [12, 8, 10, 11, 9, 5, 8],

  // TC: 3
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
