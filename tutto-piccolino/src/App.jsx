import './app.css'
import { Button } from './componentes/button';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      <h1>Funciona-El-App</h1>
      <Home />
      <Button text="enviar" />

    </div>
  );
}

export default App;
