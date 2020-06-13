# Ejemplo gh-pages y parcel

En el [video anterior](https://www.youtube.com/watch?v=JGlYs6-B32c) vimos que era muy fácil publicar una página estática en gh-pages.

Vamos a probar a publicar una aplicación sencilla utilizando como herramienta de bundling Parcel.

En este ejemplo podemos ver una aplicación React desarrollada con Typescript, tenemos un script para hacer un build
de producción.

Si lo ejecutamos parece que está todo en orden:

Vamos a probar a copiar esto a nuestra rama de gh-pages y ver si funciona:

Copiamos lop que hay en dist a una carpeta temporal.

Creamos rama gh-pages

Borramos el contenido que hay en gh-pages y volcamos lo que hay en esa carpeta.

Hacemos commit y push

Abrimos el navegador y vamos a navegar a la siguiente ruta:

https://brauliodiez.github.io/simple-parcel-gh-pages

Ooops... algo no ha ido bien, resulta que para que Parcel haga bien el bundle tenemos
que indicarle la URL destino:

- Volvemos a máster.
- Vamos a añadir un comando nuevo a nuestro package.json: en este comando añadimos la url publica a la que vamos a publicar.

```diff
  "scripts": {
    "build": "rimraf dist && parcel ./src/index.html",
    "build:prod": "rimraf dist && parcel build ./src/index.html",
+   "build:gh-pages": "tsc --noEmit && rimraf dist && parcel build ./src/index.html --public-url https://lemocnode.github.io/simple-parcel-gh-pages/"
```

- Ahora si, ejecutamos el comando:

```bash
npm run build:gh-pages
```

- Copiamos el resultado a una carpeta temporal.

- Volvemos a gh-pages

- Borramos el contenido.

- Copiamos el nuevo.

- Y commit / push

- Vamos a ver si ya se ve correctamente

https://brauliodiez.github.io/simple-parcel-gh-pages

# Agradecimientos

Este ejemplo salió gracias a que @firenz se puso a montar un ejemplo y nos pusimos a investigar porque narices no subía bien
Parcel a gh-pages, muchas gracias @firenz.
