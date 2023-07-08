

import './App.css';
import CreateMenu from './components/CreateMenu/CreateMenu';
import Greeting from './components/Greeting/Greeting';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CreateMenu></CreateMenu>
      </header>
      <main>
        <Greeting>¡Hola, bienvenido a Wave Trader!</Greeting>
      </main>
    </div>
  );
}

export default App;
