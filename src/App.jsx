import {useState, useEffect} from "react";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import {db} from "./data/db";

function App() {
  /* Lee el local storage y si existe algo lo asgina como valor inicial de state Cart, si no le setea un [] */
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");

    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  //constantes
  const MAX_ITEMS_TO_CART = 10;
  //States
  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  //efect

  /* Guarda el carrito en localStorage  cada que cambia algo en el state de cart*/
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /**
   * Agrega un producto (guitarra) al carrito de compras.
   *
   * Si el producto ya existe en el carrito, incrementa su cantidad (quantity).
   * Si no existe, lo agrega como un nuevo elemento con quantity = 1.
   *
   * @param {Object} item - El producto que se desea agregar al carrito.
   * @param {number} item.id - Identificador único del producto.
   */
  function addToCart(item) {
    /* 
      1. Verificamos si el producto ya está en el carrito.
        findIndex() recorre el arreglo "cart" y devuelve:
          - el índice (posición) del elemento si lo encuentra
          - -1 si NO lo encuentra
        Comparamos el id del producto que llega (item.id) con el id
        de cada producto ya guardado en el carrito (guitar.id) y se retorna ese true o false. 
    */
    const itemExists = cart.findIndex((guitar) => {
      return guitar.id === item.id;
    });

    /* 
      2. Si itemExists es mayor o igual a 0, significa que SÍ se encontró el producto en el carrito (ya existe). 
    */
    if (itemExists >= 0) {
      /* 
        2.1 En React, el estado (state) NUNCA debe modificarse directamente.
          Por eso creamos una copia nueva del arreglo "cart" usando el
          operador spread (...). Así "updatedCart" es un arreglo distinto
          en memoria, pero con los mismos elementos. 
      */
      const updatedCart = [...cart];

      /* 
        2.2 Como ya sabemos en qué posición está el producto (itemExists), accedemos a ese elemento dentro de la copia y aumentamos su propiedad "quantity" en 1. 
      */
      if (cart[itemExists].quantity < MAX_ITEMS_TO_CART) {
        updatedCart[itemExists].quantity++;
        setCart(updatedCart);
      }

      /* 
        2.3 Actualizamos el estado del carrito con la nueva copia ya modificada. 
      */
    } else {
      /* 
        3. Si el producto NO existía en el carrito (itemExists === -1), lo agregamos por primera vez. 
      */

      /* 3.1 Le asignamos quantity = 1, ya que es la primera unidad que se agrega al carrito. */
      item.quantity = 1;

      /* 
        3.2 Creamos un nuevo arreglo que contiene todos los productos
          anteriores (...cart) más el nuevo producto (item) al final.
          De nuevo, esto evita mutar el estado directamente. 
      */
      setCart([...cart, item]);
    }
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function incrementQuality(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS_TO_CART) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCart(updateCart);
  }

  function decrementQuality(id) {
    const productoToDelete = cart.find((item) => item.id === id);
    if (productoToDelete.quantity <= 1) {
      removeFromCart(id);
      return;
    }
    const updateCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        incrementQuality={incrementQuality}
        decrementQuality={decrementQuality}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => {
            return (
              <Guitar
                objetoGuitar={guitar}
                key={guitar.id}
                setCart={setCart}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
