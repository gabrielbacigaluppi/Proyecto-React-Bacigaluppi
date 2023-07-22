import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateMenu from './components/CreateMenu/CreateMenu';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <CreateMenu></CreateMenu>
      </header>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<h1>Carrito</h1>}></Route>
          <Route path='*' element={<h1> Page not found </h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
