import { readInput } from "../readInput";

const input = readInput("day3").split("\r");

function part_1() {
  let totalJoltage = 0;
  input.forEach((line) => {
    const numbers = line.split("").map(Number);

    const firstNumber = Math.max(...numbers.slice(0, numbers.length - 1));
    const firstIndex = numbers.indexOf(firstNumber);

    const secondNumber = Math.max(...numbers.slice(firstIndex + 1));

    totalJoltage += Number(`${firstNumber}${secondNumber}`);
  });

  console.log(totalJoltage);
}

part_1(); // 16812
