import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateMenu from "./components/CreateMenu/CreateMenu";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { createContext } from "react";
import { useState } from "react";
import CartContainer from "./components/CartContainer/CartContainer";

const cartContext = createContext({ cart: [] });

// Custom provider
function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    // para manipular el carrito y luego grabar el nuevo estado hacemos una copia primero
    setCart([...cart, { ...product, count }]);
  }

  function getTotalItemsInCart() {
    // reduce()
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function removeItemsInCart(id) {
    const nuevoCarrito = cart.filter(producto => producto.id !== id);
    setCart([...nuevoCarrito]);
  }

  return (
    <cartContext.Provider
      value={{ cart, addToCart, getTotalItemsInCart, removeItemsInCart }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <CreateMenu></CreateMenu>
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            ></Route>
            <Route
              path="/product/:id"
              element={<ItemDetailContainer />}
            ></Route>
            <Route path="/cart" element={<CartContainer/>}></Route>
            <Route path="*" element={<h1> Page not found </h1>}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
export { cartContext };
