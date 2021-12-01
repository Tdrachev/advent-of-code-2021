const fs = require("fs");
fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error in parsing file: " + err.message);
    return;
  }
  let input = [];
  for (let i of data.split("\n")) {
    input.push(Number(i));
  }

  function number_of_increases(input) {
    let increases = 0;
    for (let i = 0; i < input.length; i++) {
      input[i + 1] > input[i] ? increases++ : null;
    }

    return increases;
  }

  function sliding_number_of_increases(input) {
    let increases = 0;

    for (let i = 0; i < input.length; i++) {
      let sumA = input[i] + input[i + 1] + input[i + 2];
      let sumB = input[i + 1] + input[i + 2] + input[i + 3];
      if (sumA == NaN || sumB == NaN) break;

      sumB > sumA ? increases++ : null;
    }
    return increases;
  }

  console.log(sliding_number_of_increases(input));
});
