import './App.css';
import LoginBarbeiro from './Pages/LoginBarbeiro';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginClientes from './Pages/LoginClientes';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginBarbeiro/>} />
          <Route path="/LoginClientes" element={<LoginClientes />} />
      </Routes>
    </Router>
  );
}

export default App;
