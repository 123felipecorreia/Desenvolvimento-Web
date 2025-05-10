import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CadastroVeiculo from './CadastroVeiculo';
import VagasDisponiveis from './VagasDisponiveis';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h1>Sistema de Estacionamento</h1>
        <nav>
          <Link to="/" style={{ marginRight: '10px' }}>Cadastro de Veículo</Link>
          <Link to="/vagas">Vagas Disponíveis</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<CadastroVeiculo />} />
          <Route path="/vagas" element={<VagasDisponiveis />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



