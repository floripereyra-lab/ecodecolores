# Eco de Colores: app para Android y iPhone

Juego de memoria con colores y sonidos pensado para personas ciegas. Se explora la pantalla con el dedo,
la app dice dónde estás y se elige con doble toque.

Esta carpeta convierte la versión web en una app. La construcción la hace GitHub en sus servidores,
así que no hace falta instalar nada en tu computadora.

## Qué hay en cada carpeta

| Carpeta o archivo | Para qué sirve |
| --- | --- |
| `www/index.html` | El juego. Es la misma versión web, que además usa la voz, la vibración y el lector de pantalla del teléfono cuando corre como app. |
| `assets/` | Ícono y pantalla de inicio. |
| `scripts/` | Ajustes que se aplican al proyecto de Android y de iPhone al construirlo (pantalla vertical, vibración, voz). |
| `.github/workflows/` | Instrucciones para que GitHub construya la app. |
| `capacitor.config.json` | Nombre de la app e identificador. |

## Paso a paso: obtener el instalable de Android

1. **Cuenta de GitHub.** Si no tenés, creala en github.com (botón "Sign up").
2. **Repositorio nuevo.** Con el botón "+" de arriba a la derecha, "New repository". Nombre: `eco-de-colores`.
   Puede ser privado. En cuentas gratuitas hay unos 2.000 minutos por mes de construcción, que alcanzan de sobra.
3. **Subir los archivos.** Descomprimí el zip en tu computadora. En la página del repositorio: "Add file", "Upload files",
   y arrastrá **todo el contenido** de la carpeta `eco-de-colores`, incluida la carpeta `.github` (empieza con punto, así que
   algunos sistemas la ocultan: en Mac se muestran con Cmd + Shift + punto, y en Windows con Ver, Elementos ocultos).
   Después tocá "Commit changes".
   - Si `.github` no se subió: "Add file", "Create new file", escribí `.github/workflows/android.yml` como nombre y pegá
     el contenido del archivo de ese nombre.
4. **Construir.** Pestaña "Actions", elegí "Android - instalable de prueba" y "Run workflow". La primera vez tarda 10 a 15 minutos.
   Si GitHub pide habilitar Actions, aceptá.
5. **Descargar.** Cuando aparezca el tilde verde, entrá a esa ejecución. Abajo, en "Artifacts", descargá
   `eco-de-colores-instalable-android`. Adentro está `app-debug.apk`.
6. **Instalar.** Pasá el archivo al teléfono (Google Drive, correo o cable), abrilo y permití instalar desde esa fuente.
   Android puede mostrar una advertencia porque es una versión de prueba.
7. **Si sale una cruz roja,** abrí la ejecución, copiá el mensaje de error y pegáselo a Claude.

## Web pública (opcional)

En el repositorio: "Settings", "Pages", y en "Source" elegí "GitHub Actions". Después, en "Actions", corré "Web pública".
Te da un enlace que cualquiera puede abrir en el navegador del celular, para probar la versión web sin compartir nada más.

## iPhone

El flujo "iPhone - comprobación de compilación" se corre a mano y solo comprueba que la app compila. Para instalarla en un iPhone
o subirla a la App Store hace falta una cuenta de Apple Developer (pago anual) y la firma de la app. Eso se agrega después de Android.

## Antes de publicar en las tiendas

- **Identificador de la app** (`appId` en `capacitor.config.json`, hoy `app.ecodecolores`). Una vez publicada, no se puede cambiar.
  Elegí uno definitivo antes de subirla.
- **Google Play:** cuenta de desarrollador (pago único), firma de la app, paquete `.aab`, ficha de la tienda y formulario de
  seguridad de datos. Las cuentas personales nuevas suelen tener que hacer antes una prueba cerrada con testers: conviene
  confirmar las reglas vigentes en Google Play Console.
- **Versión:** al publicar actualizaciones hay que subir el número de versión.

## Qué está probado y qué no

Probado desde Claude, con las funciones nativas simuladas: el juego, la voz al abrir, la bienvenida, la vibración, el cambio
automático entre voz de la app y lector de pantalla, y los ajustes de Android e iPhone sobre archivos de ejemplo.

**Sin probar:** la construcción real de la app, la voz en español en distintos teléfonos, la vibración real, TalkBack y
VoiceOver reales, el aspecto en pantallas con muesca o barra de gestos, y el ícono en distintas pantallas.

## Qué revisar en un teléfono

1. Al abrir, la voz dice "Tocá la pantalla para empezar", y el primer toque da la bienvenida completa.
2. Vibra al empezar tu turno, en cada acierto, al pasar de nivel y al equivocarte, y no al explorar.
3. Con TalkBack o VoiceOver activado, el botón "Modo TalkBack" desaparece y el lector lee los mensajes.
4. Al apagar TalkBack con la app abierta, vuelve a hablar la app.
5. Los colores se dicen con "Decir colores" activado, con y sin TalkBack.
6. En iPhone, los sonidos del juego se escuchan con el interruptor de silencio apagado. Si con el interruptor activado no
   suenan, hay que ajustar el audio de la app.
7. La barra de botones de abajo no queda tapada por la barra de gestos del teléfono.
