# 🎸 GuitarLA

**GuitarLA** es ejemplode aplicación web de comercio electrónico (e-commerce) desarrollada con **React**, que simula una tienda en línea de guitarras. Permite a los usuarios explorar un catálogo de productos y gestionar un carrito de compras de forma completamente interactiva, sin necesidad de recargar la página.

## 📋 Descripción del proyecto

El proyecto está pensado como un ejercicio práctico de migración de una aplicación de HTML, CSS y JS a React para reforzar conceptos fundamentales de React, tales como el manejo de estado (`useState`), estado derivado (`useMemo`), paso de props entre componentes, renderizado condicional y manipulación inmutable de arreglos y objetos.

La aplicación muestra un catálogo de guitarras obtenido desde una fuente de datos local (`db`), y permite:

- Ver el catálogo completo de guitarras disponibles.
- Agregar productos al carrito de compras.
- Visualizar el contenido del carrito en un panel desplegable desde el header.
- Incrementar o disminuir la cantidad de un producto ya agregado.
- Eliminar un producto del carrito de forma manual o automática (cuando su cantidad llega a cero).
- Vaciar el carrito por completo.
- Ver el total a pagar, calculado dinámicamente según los productos y cantidades en el carrito.
- Respetar un límite máximo de unidades por producto (`MAX_ITEMS_TO_CART`), tanto al agregarlo por primera vez como al incrementarlo desde el carrito.

## ✨ Funcionalidades principales

| Funcionalidad            | Descripción                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------- |
| **Agregar al carrito**   | Agrega una guitarra nueva o incrementa su cantidad si ya existe, respetando el máximo permitido.    |
| **Incrementar cantidad** | Aumenta en 1 la cantidad de un producto ya agregado, sin superar el máximo.                         |
| **Decrementar cantidad** | Disminuye en 1 la cantidad de un producto; si llega a 0, se elimina automáticamente del carrito.    |
| **Eliminar producto**    | Quita un producto específico del carrito mediante su `id`.                                          |
| **Vaciar carrito**       | Elimina todos los productos del carrito de una sola vez.                                            |
| **Carrito vacío**        | Muestra un mensaje indicando que el carrito está vacío cuando no contiene productos.                |
| **Total a pagar**        | Calcula automáticamente el total, sumando `precio × cantidad` de cada producto (mediante `reduce`). |

## 🧱 Estructura del proyecto

```
guitarla/
├── public/
│   └── img/               # Imágenes de las guitarras, logo, carrito, etc.
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Header con logo, ícono del carrito y panel del carrito
│   │   └── Guitar.jsx      # Tarjeta individual de cada guitarra del catálogo
│   ├── data/
│   │   └── db.js           # Data local con el catálogo de guitarras
│   ├── App.jsx              # Componente principal: maneja el estado global del carrito
│   └── main.jsx              # Punto de entrada de la aplicación
├── index.html
├── package.json
└── README.md
```

> **Nota:** la estructura anterior es una referencia basada en el desarrollo del proyecto. Ajusta esta sección según la organización real de tus carpetas y archivos.

## 🛠️ Tecnologías utilizadas

- **React** — Librería principal para la construcción de la interfaz.
- **Vite** (o Create React App, según corresponda) — Entorno de desarrollo y build.
- **Bootstrap** — Estilos y componentes de UI (grid, botones, tablas).
- **JavaScript (ES6+)** — Lógica de la aplicación (hooks, métodos de arreglos como `map`, `filter`, `find`, `reduce`).

## 🧠 Conceptos de React aplicados

- **Estado (`useState`)** para manejar el catálogo de productos y el carrito de compras.
- **Estado derivado (`useMemo`)** para calcular valores como si el carrito está vacío (`cartIsEmpty`) o el total a pagar (`cartTotal`), sin duplicar información ni recalcular innecesariamente en cada render.
- **Inmutabilidad del estado**: todas las actualizaciones del carrito se realizan creando copias nuevas de los arreglos/objetos (spread operator `...`), en lugar de mutar el estado directamente.
- **Props** para comunicar el estado del carrito y sus funciones (`addToCart`, `removeFromCart`, `incrementQuality`, `decrementQuality`) entre componentes.

## 🚀 Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/AldaMayorgaDev/01-simple-cart-GuitarLA.git
   cd guitarla
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en la URL indicada en la terminal (por defecto suele ser `http://localhost:5173` con Vite).

## 📌 Estado del proyecto

Proyecto en desarrollo, con fines educativos, orientado a practicar el manejo de estado y arreglos en React mediante un caso de uso real: un carrito de compras.

## 📄 Licencia

Este proyecto se distribuye con fines educativos. Puedes adaptarlo y utilizarlo libremente para tu propio aprendizaje.

Hecho con 🖤 por @AldaMayorgaDev
