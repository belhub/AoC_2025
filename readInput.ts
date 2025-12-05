import { readFileSync } from "fs";
import path from "path";

export function readInput(folderName: string) {
  const filePath = path.join(__dirname, folderName, "input.txt");
  return readFileSync(filePath, "utf-8");
}
