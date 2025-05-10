import React, { useState } from 'react';

function CadastroVeiculo() {
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [cor, setCor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Veículo cadastrado:', { placa, modelo, cor });
    // Aqui você pode enviar os dados para um backend ou armazenar localmente
  };

  return (
    <div>
      <h2>Cadastro de Veículo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Placa:
          <input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
          />
        </label>
        <br />
        <label>
          Modelo:
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Cor:
          <input
            type="text"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroVeiculo;
