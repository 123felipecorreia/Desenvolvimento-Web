import React, { useState, useEffect } from "react";
import { listarVagas, removerVaga } from "./vagasService";




function VagasDisponiveis() {
  const [vagas,setVagas] = useState ([]);

useEffect (() => {
  setVagas (listarVagas ());

},[]);

const handleRemove = (placa) => {
  removerVaga (placa);
  setVagas (listarVagas ());
};


  return (
    <div>
      <h2>Vagas Disponíveis</h2>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vagas.map((vaga, index)=>
            <tr key={index}>
              <td>{vaga.placa}</td>
              <td>{vaga.modelo}</td>
              <td>
                <button onClick={() => handleRemove(vaga.placa)}>Remover</button>
              </td>
            </tr>
          )}
          <tr>
            <td>01</td>
            <td>Ocupada</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Disponível</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VagasDisponiveis;
