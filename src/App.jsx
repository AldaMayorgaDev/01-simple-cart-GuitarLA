import Header from "./components/Header";
import Guitar from "./components/Guitar";
import {useCart} from "./hooks/useCart";

function App() {
  //Uso de Custom hook useCart();
  const {
    data,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    incrementQuality,
    decrementQuality,
    clearCart,
    cartIsEmpty,
    cartTotal,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        incrementQuality={incrementQuality}
        decrementQuality={decrementQuality}
        clearCart={clearCart}
        cartIsEmpty={cartIsEmpty}
        cartTotal={cartTotal}
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
