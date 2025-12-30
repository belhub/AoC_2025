import { readInput } from "../readInput";

const flattenTheInput = (input: string) => {
  let rowLength = 0;
  const flatInput = input.split("\n").flatMap((i) => {
    rowLength = i.length;
    return i.split("");
  });
  return { rowLength, flatInput };
};

const returnNeighbours = (
  input: string[],
  index: number,
  rowLength: number
) => {
  const neighbours: string[] = [
    input[index - rowLength],
    input[index + rowLength],
  ];
  if (index % rowLength !== 0) {
    neighbours.push(
      input[index - 1 - rowLength],
      input[index - 1],
      input[index - 1 + rowLength]
    );
  }
  if (index % rowLength !== rowLength - 1) {
    neighbours.push(
      input[index + 1 - rowLength],
      input[index + 1],
      input[index + 1 + rowLength]
    );
  }

  return neighbours;
};

const sumPaperRolls = (input: string[], rowLength: number) => {
  let paperRollsSum = 0;

  input.forEach((value: string, index: number) => {
    if (value === "@") {
      if (
        returnNeighbours(input, index, rowLength).filter(
          (n: string) => n === "@"
        ).length < 4
      ) {
        paperRollsSum++;
      }
    }
  });

  return paperRollsSum;
};

function part_1() {
  const { rowLength, flatInput } = flattenTheInput(readInput("day4"));

  const accessedPaper = sumPaperRolls(flatInput, rowLength);

  console.log("Part_1: ", accessedPaper);
}

function part_2() {
  const { rowLength, flatInput } = flattenTheInput(readInput("day4"));
  let sumOfRemovedPaperRolls = 0;

  while (true) {
    let sumOfRemovedPaperRollsInIteration = 0;
    flatInput.forEach((value: string, index: number) => {
      if (value === "@") {
        if (
          returnNeighbours(flatInput, index, rowLength).filter(
            (n: string) => n === "@"
          ).length < 4
        ) {
          flatInput[index] = "x";
          sumOfRemovedPaperRollsInIteration++;
        }
      }
    });
    sumOfRemovedPaperRolls += sumOfRemovedPaperRollsInIteration;
    if (sumOfRemovedPaperRollsInIteration === 0) break;
  }

  console.log("Part_2: ", sumOfRemovedPaperRolls);
}

part_1(); // 1389

part_2(); // 9000
