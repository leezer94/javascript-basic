/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
  const result = Array(10).fill(0);
  const arr = [];

  for (let i = s; i <= e; i++) {
    arr.push(i);
  }

  for (let num of arr) {
    num = String(num)
      .split('')
      .map((el) => Number(el));

    for (let index of num) {
      result[index]++;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
