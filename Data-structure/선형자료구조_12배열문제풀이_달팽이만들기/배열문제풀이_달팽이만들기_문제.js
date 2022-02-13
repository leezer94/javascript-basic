/* 달팽이 만들기 */

/* user code */
function answer(length) {
  let result = [];

  for (let i = 0; i < length; i++) {
    result.push([]);

    for (let arr of result) {
      arr.push(i + 1);
      if (arr[length - 1] === length) {
      }
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  6,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
