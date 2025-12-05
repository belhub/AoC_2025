import { readInput } from "../readInput";

const input = readInput("day2").split(",");

function part_1() {
  let sum = 0;
  input.forEach((range) => {
    const [start, end] = range.split("-").map((x) => Number(x.trim()));
    sum += sumValidIdsPart1(start, end);
  });

  console.log("part_1", sum);
}

function sumValidIdsPart1(start: number, end: number): number {
  let sum = 0;
  for (let id = start; id <= end; id++) {
    if (checkNumberIsValid(id.toString())) sum += id;
  }
  return sum;
}

function checkNumberIsValid(numberAsStr: string) {
  const middle = Math.floor(numberAsStr.length / 2);
  return numberAsStr.slice(0, middle) == numberAsStr.slice(middle);
}

function sumValidIdsPart2(start: number, end: number): number {
  let sum = 0;
  for (let id = start; id <= end; id++) {
    if (isRepeatingPattern(id.toString())) sum += id;
  }
  return sum;
}

function isRepeatingPattern(numStr: string): boolean {
  const len = numStr.length;
  for (let subLen = 1; subLen <= Math.floor(len / 2); subLen++) {
    const pattern = numStr.slice(0, subLen).repeat(Math.ceil(len / subLen));
    if (pattern === numStr) return true;
  }
  return false;
}

function part_2() {
  let sum = 0;
  input.forEach((range) => {
    const [start, end] = range.split("-").map((x) => Number(x.trim()));
    sum += sumValidIdsPart2(start, end);
  });

  console.log("part_2", sum);
}

part_1(); // 30323879646
part_2(); // 43872163557
