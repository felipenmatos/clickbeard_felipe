import './App.css';
import LoginBarbeiro from './Pages/LoginBarbeiro';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginClientes from './Pages/LoginClientes';
import CadastroCliente1 from './Pages/CadastroCliente_Nome';
import CadastroCliente2 from './Pages/CadastroCliente_Email';
import CadastroCliente3 from './Pages/CadastroCliente_Senha';
import HomeClientes from './Pages/HomeClientes';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginBarbeiro/>} />
          <Route path="/LoginClientes" element={<LoginClientes />} />
          <Route path="/CadastroCliente1" element={<CadastroCliente1 />} />
          <Route path="/CadastroCliente2" element={<CadastroCliente2 />} />
          <Route path="/CadastroCliente3" element={<CadastroCliente3 />} />
          <Route path="/HomeClientes" element={<HomeClientes />} />
      </Routes>
    </Router>
  );
}

export default App;
