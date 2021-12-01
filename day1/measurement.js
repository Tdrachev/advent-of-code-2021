const fs = require("fs");
fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error in parsing file: " + err.message);
    return;
  }
  let input = data.split("\n");

  function number_of_increases(input) {
    let increases = 0;
    for (let i = 0; i < input.length; i++) {
      Number(input[i + 1]) > Number(input[i]) ? increases++ : null;
    }

    return increases;
  }

  function sliding_number_of_increases(input) {
    let increases = 0;
    for (let i = 0; i < input.length; i++) {
      Number(input[i + 1]) + Number(input[i + 2]) + Number(input[i + 3]) >
      Number(input[i]) + Number(input[i + 1]) + Number(input[i + 2])
        ? increases++
        : null;
    }
    return increases;
  }
  console.log(number_of_increases(input));
  console.log(sliding_number_of_increases(input));
});
