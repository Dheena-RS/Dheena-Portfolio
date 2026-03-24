import { build } from 'vite';
import fs from 'fs';

async function runBuild() {
  try {
    await build();
  } catch (e) {
    if (e.errors) {
       fs.writeFileSync('build-error.json', JSON.stringify(e.errors, null, 2));
    } else {
       fs.writeFileSync('build-error.json', JSON.stringify({message: e.message}, null, 2));
    }
  }
}

runBuild();
