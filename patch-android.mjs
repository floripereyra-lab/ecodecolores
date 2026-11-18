// Ajusta el proyecto Android que genera Capacitor:
// - pantalla siempre en vertical
// - permiso de vibración
// - acceso a las voces del teléfono (necesario desde Android 11 para la voz en español)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const path = 'android/app/src/main/AndroidManifest.xml';
if (!existsSync(path)) {
  console.error(`No existe ${path}. ¿Se ejecutó "npx cap add android"?`);
  process.exit(1);
}

let xml = readFileSync(path, 'utf8');

if (!xml.includes('android:screenOrientation')) {
  xml = xml.replace('<activity', '<activity\n            android:screenOrientation="portrait"');
}
if (!xml.includes('android.permission.VIBRATE')) {
  xml = xml.replace('</manifest>', '    <uses-permission android:name="android.permission.VIBRATE" />\n</manifest>');
}
if (!xml.includes('TTS_SERVICE')) {
  xml = xml.replace(
    '</manifest>',
    '    <queries>\n        <intent>\n            <action android:name="android.intent.action.TTS_SERVICE" />\n        </intent>\n    </queries>\n</manifest>'
  );
}

writeFileSync(path, xml);
console.log('AndroidManifest.xml ajustado.');
