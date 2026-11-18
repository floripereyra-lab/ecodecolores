// Ajusta el proyecto iOS que genera Capacitor: en iPhone, pantalla siempre en vertical.
// (En iPad se dejan todas las orientaciones porque Apple lo exige.)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const path = 'ios/App/App/Info.plist';
if (!existsSync(path)) {
  console.error(`No existe ${path}. ¿Se ejecutó "npx cap add ios"?`);
  process.exit(1);
}

let plist = readFileSync(path, 'utf8');
plist = plist.replace(
  /(<key>UISupportedInterfaceOrientations<\/key>\s*<array>)[\s\S]*?(<\/array>)/,
  '$1\n\t\t<string>UIInterfaceOrientationPortrait</string>\n\t$2'
);

writeFileSync(path, plist);
console.log('Info.plist ajustado.');
