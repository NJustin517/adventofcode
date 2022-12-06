import fs from "fs";
const input = fs.readFileSync("day_3.txt", "utf-8").split("\n");

// console.log(input);

const priorities = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function sum(input) {
  sum = 0;
  for (let i = 0; i < input.length; i++) {
    const length = input[i].length;
    const front_half = input[i].slice(0, length / 2);
    const back_half = input[i].slice(length / 2, length);
    console.log(front_half, back_half);
    sum += get_priority(front_half, back_half);
  }
  return sum;
}

function get_priority(str1, str2) {
  const first_letters = new Set();
  let common_char;
  for (let char of str1) {
    first_letters.add(char);
  }
  for (let char of str2) {
    if (first_letters.has(char)) {
      common_char = char;
      break;
    }
  }
  return priorities.indexOf(common_char);
}

// console.log(sum(input));

function group_sum(input) {
  sum = 0;
  for (let i = 0; i < input.length; i += 3) {
    sum += get_group_priority(input[i], input[i + 1], input[i + 2]);
  }
  return sum;
}

function get_group_priority(str1, str2, str3) {
  const first_letters = new Set();
  const second_letters = new Set();
  let common_char;
  for (let char of str1) {
    first_letters.add(char);
  }
  for (let char of str2) {
    second_letters.add(char);
  }
  for (let char of str3) {
    if (first_letters.has(char) && second_letters.has(char)) {
      common_char = char;
      break;
    }
  }
  return priorities.indexOf(common_char);
}

console.log(group_sum(input));
