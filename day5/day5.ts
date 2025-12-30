import { readInput } from "../readInput";

const filterInput = () => {
  let rangesArray: { start: number; end: number }[] = [];
  let ids: number[] = [];

  readInput("day5")
    .split("\n")
    .map((val) => {
      if (val.includes("-")) {
        const [rangeStart, rangeEnd] = val.split("-").map((n) => Number(n));
        rangesArray.push({ start: rangeStart, end: rangeEnd });
      } else if (val.length > 0) {
        ids.push(Number(val));
      }
    });

  return { rangesArray, ids };
};

function findAvailableFreshIds(
  rangesArray: { start: number; end: number }[],
  ids: number[]
) {
  let numOfFreshIds = 0;

  ids.forEach((id) => {
    rangesArray.some(({ start, end }) => {
      if (start <= id && id <= end) {
        numOfFreshIds++;
        return true;
      }
    });
  });

  return numOfFreshIds;
}

function part_1() {
  const { rangesArray, ids } = filterInput();
  const numOfFreshIds = findAvailableFreshIds(rangesArray, ids);

  console.log("Part_1: ", numOfFreshIds);
}

part_1(); // 733
