import * as lucide from 'lucide-react';
import fs from 'fs';
const icons = Object.keys(lucide);
fs.writeFileSync('icons.json', JSON.stringify(icons, null, 2));
console.log("Written to icons.json");


