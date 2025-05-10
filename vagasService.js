const Storage_Key = "vagas_estacionamento";

function getVagas () {
    const data = localStorage.getItem(Storage_Key);
    return data ? JSON.parse(data) : [];
}

function saveVagas(vagas) {
    localStorage.setItem(Storage_Key, JSON.stringify(vagas));
}


export function listarVagas () {
    return getVagas;
}

export function salvarVaga (novaVaga) {
    const vagas = getVagas ();
    vagas.push (novaVaga);
    saveVagas(vagas);
}

export function removerVaga (vaga) {
    const vagas = getVagas().filter(v => v.placa !== vaga.placa);
    saveVagas (vagas);
}

export function listarVeiculos () {
    const dados = localStorage.getItem (Storage_Key);
    return dados ? JSON.parse(dados) : [];
}

export function removerVeiculo (placa) {
    let veiculos = listarVeiculos();
    veiculos = veiculos.filter(v => v.placa !== placa);
    localStorage.setItem(Storage_Key, JSON.stringify(veiculos));
}