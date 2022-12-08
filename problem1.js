import fs from "fs";
const input = fs.readFileSync("day_1.txt", "utf-8").split("\n");

// console.log(input);

let most_calories = [0, 0, 0];
let current_calories = 0;

function main(cal_list) {
  cal_list.forEach((num) => {
    if (num !== "") {
      current_calories += parseInt(num);
    } else {
      console.log(current_calories);
      if (current_calories > most_calories[2]) {
        most_calories[2] = current_calories;
        most_calories.sort((a, b) => b - a);
      }
      current_calories = 0;
      console.log(current_calories, most_calories);
    }
  });

  return most_calories.reduce((a, b) => {
    return a + b;
  }, 0);
}

console.log(main(input));
