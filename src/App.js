import './App.css';
import LoginBarbeiro from './Pages/LoginBarbeiro';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginBarbeiro/>} />
      </Routes>
    </Router>
  );
}

export default App;
