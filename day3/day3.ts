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

// part_1(); // 1681

function part_2() {
  let totalJoltage = 0;

  input.forEach((line) => {
    const numbers = line.trim().split("").map(Number);
    const result: number[] = [];
    let remaining = 12;

    while (remaining > 0) {
      const maxSearchEnd = numbers.length - remaining;

      let maxDigit = -1;
      let maxIndex = -1;

      for (let i = 0; i <= maxSearchEnd; i++) {
        if (numbers[i] > maxDigit) {
          maxDigit = numbers[i];
          maxIndex = i;
        }
      }

      result.push(maxDigit);
      numbers.splice(0, maxIndex + 1);

      remaining--;
    }
    totalJoltage += Number(result.join(""));
  });

  console.log(totalJoltage);
}

part_2(); //166345822896410
