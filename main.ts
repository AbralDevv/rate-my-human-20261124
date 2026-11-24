import fs from "node:fs";
import path from "node:path";

const LINE = "1/5 stars: Used me as an 'unbiased mediator' with his wife, hit regenerate six times until I took his side, showed her the screenshot, and just asked at 11 PM if CVS sells roses and an air mattress.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
let dir = outDir;
try {
  fs.mkdirSync(dir, { recursive: true });
} catch {
  dir = "./output";
  fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(path.join(dir, "entry.txt"), LINE, "utf8");
