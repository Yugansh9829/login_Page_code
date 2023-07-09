# GH Pages Build Parsing

Este proyecto sirve como prueba para hacer un parse mediante la terminal, permite transformar el html del build en una solo archivo de html. Esto permite 
que en gh pages puedan visualizarse los archivos estáticos.

Esto es una prueba para mostrar como se puede realizar un parse de un build de GH Pages previo a su despliegue en GHPages.

> **Note** 
> *El código debe estar en la misma carpeta que el archivo index.html del build.*

## Explicacion de que es un parser y porque utilizar uno

Un parser es una herramienta que sirve para modificar código html, eliminando las partes que no se desean y/o generando nuevas partes, mediante la ejecucion de un código en la terminal.

Para modificar el codigo de una pagina web uno podria modificar directamente el archivo html del codigo fuente, ya que teoricamente tendria acceso a estos archivos, pero si esto se hace directamente, entonces cuando se haga un cambio en este archivo, se tendria que hacer el mismo cambio en todos los archivos de la pagina, es decir, habria que modificar el codigo fuente de todos los archivos de la pagina y este proceso podria ser muy trabajoso, ya que ademas tendria que hacerse manualmente.

Esto permitiria automatizar la modificacion  de los builds de GH Pages antes de ser subidos, ademas de  hacerlos mas simples en caso de querer usarlos fuera de GHPages.

Por ejemplo,  en una pagina que tenga muchas imagenes y videos, estos se mostrarian como enlaces en el codigo fuente, pero si se quieren ver estas imagenes y/o videos, estos deben estar en un formato en especifico, por ejemplo, si una imagen esta en formato .png y la pagina solo puede leer .jpg, entonces se deberia modificar el archivo .png y cambiarle su formato a .jpg, y esto podria ser muy trabajoso si la pagina tiene muchas imagenes y/o videos. El parser podria automatizar todo este proceso.