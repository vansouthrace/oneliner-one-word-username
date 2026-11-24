import fs from 'node:fs';
import path from 'node:path';

const entry = `calm-badger-97-9980`;
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry);
