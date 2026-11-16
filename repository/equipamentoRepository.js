export async function criarEquipamento(equipamento) {
    const sql = 'INSERT INTO equipamentos(codigoPatrimonio, nome, setor, status) VALUES (?,?,?)';
    const[resultado] = await conexao.execute[sql, equipamento.codigoPatrimonio, equipamento.nome, equipamento.setor, equipamento.status];
}

export async function listarEquipamentos() {
    const sql = 'SELECT * FROM equipamento  = ?';
   const[resultado] = await conexao.execute(sql,id);
}

export async function buscarEquipamentoPorId(id) {
    const sql = 'SELECT * FROM equipamento WHERE id_equipamentos = ?';
    const[resultado] = await conexao.execute(sql,id);
}

export async function atualizarEquipamento(id, equipamento) {
    const sql = 'UPDATE equipamentos SET id_equipamentos = ?';
    const[resultado] = await conexao.execute(sql,equipamento,id);
}

export async function excluirEquipamento(id) {
    const sql = 'DELETE equipamentos SET id_equipamentos = ?';
    const[resultado] = await conexao.execute(sql, id)
}
