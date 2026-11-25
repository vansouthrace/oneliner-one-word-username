// One Word, One Username, One Reward: my own make.fun username, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// My make.fun handle, one word and nothing else.
const entry = "calm-badger-97-9980";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
