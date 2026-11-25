import { mkdirSync, writeFileSync } from "node:fs";

// One line, 155 characters: a roast of a smart fridge.
// Angle: a firmware update promotes the ice maker to middle management —
// it gains a login screen and a subscription, and loses the one job it had.
// It dodges the obvious cracks (no grocery ordering, no spying camera) and
// lands on a specific smart-fridge pain: an update that makes the appliance
// worse, with the punchline turning on the ice maker's unearned confidence.
const LINE =
  "My fridge updated its firmware overnight; now the ice maker has a login screen, a monthly subscription, and the confidence of a man who has never made ice.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
