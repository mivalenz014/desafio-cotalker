# Desafío Cotalker - Prácticas 2021

## Back End

Se debe acceder a carpeta `backend` y ejecutar:

~~~
npm run dev
~~~

La aplicación corre en el puerto 4000, aunque se puede cambiar en la variable PORT del archivo .env.

## Front End

Se debe acceder a carpeta `backend` y ejecutar:

~~~
ng serve -o
~~~

La aplicación corre en el puerto 4200 (por defecto). Una vista previa del frontend se muestra a continuación:

![Preview del frontend](https://raw.githubusercontent.com/mivalenz014/desafio-cotalker/master/front-end.png)

## Base de Datos y filtrado de datos

Se cargó el dataset en MongoDB de forma local. Respecto al filtrado, la idea era la siguiente:

1. Recibir los filtros desde el frontend.
2. Dado que eran 48 compañías y 6302 usuarios, lo mejor es hacer las búsquedas respecto a ellas.
3. Se comparaban 2 registros a la vez. Si ambos correspondían al mismo usuario, entonces se calculaba la diferencia entre la llamada i+1 y la llamada i. Si dicha diferencia era menor o igual que el intervalo activo, se sumaba 2 al contador de sesiones; en caso contrario, se sumaba 1 al contador de sesiones.
4. La idea era determinar los meses en los que se realizaban las llamadas para poder graficarlas como en el enunciado. Para ello, se tenía un arreglo de largo 12, donde cada casilla correspondía a las llamadas realizadas en dicho mes. Lamentablemente, dado la alta cantidad de datos no se pudo comprobar su funcionamiento porque el heap de JS quedaba sin memoria :C

## To Do List

- [ ] Conectar *backend* con *frontend*
- [ ] Realizar los filtros
- [ ] Aprender Angular
