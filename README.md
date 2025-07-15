# Laboratorio: Propiedades y Objetos

Este laboratorio contiene ejercicios para practicar la creación y manejo de objetos en JavaScript utilizando funciones constructoras, propiedades, métodos y condicionales.

---

## Ejercicio 1: Libro (`libro.js`)

Crear un sistema de préstamo de libros.

**Tareas:**
1. Usa el constructor `Libro` para crear un objeto con título y autor.
2. Agrega una propiedad `prestado = false`.
3. Implementa el método `prestar()` que:
   - Cambie `prestado` a `true` si el libro está disponible.
   - Muestre un mensaje de error si ya está prestado (usando `if`).
4. Prueba prestar el libro dos veces y observa los mensajes.

---

## Ejercicio 2: Lista de Compras (`compras.js`)

Gestionar una lista dinámica de productos.

**Tareas:**
1. Usa el constructor `ListaCompras` para crear una lista vacía (`this.productos = []`).
2. Añade 3 productos con el método `agregar()`.
3. Implementa el método `mostrar()` que use un `for` para listar los productos numerados (ej: `"1. Manzanas"`).
4. Muestra la lista completa en consola.

---

## Ejercicio 3: Reproductor de Música (`musica.js`)

**Tareas:**
1. Crea un objeto `Reproductor` usando una función constructora con:
   - Una propiedad `estado` con valor inicial `"detenido"` (otros valores posibles: `"reproduciendo"`, `"pausado"`).
2. Implementa estos métodos:
   - `play()`:
     - Si el estado es `"detenido"` o `"pausado"`, cambia a `"reproduciendo"` y muestra `"Reproduciendo música..."`.
   - `pausar()`:
     - Si ya está pausado, muestra `"Ya se está reproduciendo música."`.
     - Si el estado es `"reproduciendo"`, cambia a `"pausado"` y muestra `"Música pausada."`.
     - Si no, muestra `"No hay música reproduciéndose."`.
   - `detener()`:
     - Cambia el estado a `"detenido"` y muestra `"Música detenida."`.

---

## Ejercicio 4: Carrito de Compras con Descuentos (`compras_descuentos.js`)

**Tareas:**
1. Crea un objeto `Carrito` usando una función constructora o clase que tenga:
   - Una propiedad `productos` (array vacío).
   - Una propiedad `total` (inicialmente 0).
2. Implementa estos métodos:
   - `agregarProducto(nombre, precio)`: Añade el producto al array y suma el precio al total.
   - `calcularDescuento()`:
     - Si el total es mayor a $100, aplica un 10% de descuento y muestra.
     - Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
     - Si no, muestra el total sin descuento.