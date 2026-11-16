# Love · Para Valentina

Una página romántica con una carta, una galería de cuatro fotos, mensajes al ampliar cada imagen, música y un corazón que revela 50 razones para querer a Valentina.

## Ejecutar localmente

Requiere Node.js 18 o posterior. No necesita instalar dependencias.

```sh
npm start
```

Abrir <http://127.0.0.1:8787>. Para detener el servidor, presionar `Ctrl+C` en la terminal que lo ejecuta.

```sh
npm run check
```

Este comando comprueba la sintaxis del servidor y los archivos JavaScript.

## Archivos

- `dist/index.html`: contenido y estructura de la página.
- `dist/effects.css` y `dist/effects.js`: galería y efectos visuales.
- `dist/reasons.css` y `dist/reasons.js`: corazón interactivo y razones.
- `dist/music.js`: reproducción de música y controles.
- `dist/media/`: fotos y canción.
- `serve-local.cjs`: servidor local; publica únicamente `dist/` y admite solicitudes por rangos para el audio.
- `.openai/hosting.json`: identificación de la publicación existente en Sites.

La música intenta comenzar automáticamente. Si el navegador requiere interacción, empieza con el primer toque o con el botón «Escuchar canción».

## Compartir temporalmente con Cloudflare

Con el servidor local encendido y `cloudflared` instalado, ejecutar en otra terminal:

```sh
cloudflared tunnel --url http://127.0.0.1:8787
```

Cloudflare mostrará un enlace público temporal. El servidor y el túnel deben permanecer activos para que funcione. Al crear un túnel nuevo, el enlace puede cambiar.

Los registros y los identificadores de procesos locales se excluyen de Git mediante `.gitignore`.

## Desplegar en Railway

El archivo `railway.json` configura `npm start` y la comprobación HTTP de `/`. El servicio debe usar la raíz del repositorio, donde están `package.json` y `serve-local.cjs`.

Railway proporciona la variable `PORT`. Cuando está definida, el servidor usa ese puerto y escucha en `0.0.0.0`. Sin `PORT`, mantiene la dirección local `127.0.0.1:8787`. La variable opcional `HOST` permite cambiar explícitamente la dirección de escucha.

Conectar `Davius07/Love`, seleccionar la rama `main` y generar un dominio público en la configuración de red del servicio. El puerto de destino del dominio debe coincidir con el puerto del servidor.
