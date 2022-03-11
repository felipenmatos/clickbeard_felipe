import './App.css';
import LoginBarbeiro from './Pages/LoginBarbeiro';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginClientes from './Pages/LoginClientes';
import CadastroCliente1 from './Pages/CadastroCliente_Nome';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginBarbeiro/>} />
          <Route path="/LoginClientes" element={<LoginClientes />} />
          <Route path="/CadastroCliente1" element={<CadastroCliente1 />} />
      </Routes>
    </Router>
  );
}

export default App;
