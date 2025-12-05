import { readInput } from "../readInput";

const input = readInput("day1").split("\n");
const MODULO = 100;
const INITIAL_DIAL = 50;

let clickCount = 0;
let position = INITIAL_DIAL;

function resetValues() {
  clickCount = 0;
  position = INITIAL_DIAL;
}

function part_1() {
  input.forEach((command) => {
    const direction = command[0];
    const value = Number(command.slice(1));

    position += direction === "R" ? value : -value;

    if (position < 0) position += MODULO;

    position %= MODULO;

    if (position === 0) clickCount++;
  });
  console.log("Part1: ", clickCount);
}

function normalicePosition(position: number, alreadyClicked: boolean) {
  while (position < 0 || position > MODULO) {
    if (position < 0) {
      position += MODULO;
    }
    if (position > MODULO) {
      position -= MODULO;
    }
    alreadyClicked ? (alreadyClicked = false) : clickCount++;
  }
  return position;
}

function part_2() {
  input.forEach((command) => {
    const direction = command[0];
    const value = Number(command.slice(1));

    let alreadyClicked = false;

    if (direction === "R") {
      position += value;
    } else {
      if (position === 0) alreadyClicked = true;
      position -= value;
    }

    const normalizeResult = normalicePosition(position, alreadyClicked);
    position = normalizeResult % MODULO;

    if (position === 0) clickCount++;
  });
  console.log("Part2: ", clickCount);
}

part_1(); // 1123
resetValues();
part_2(); //6695
