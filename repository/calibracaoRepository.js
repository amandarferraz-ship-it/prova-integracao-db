export async function criarCalibracao(calibracao) {
    const sql = 'INSER INT equipamentos (equipamentoId, dataCalibracao, resultado, responsavel ) VALUES (?,?,?,?)';
    const [resultado] = await conexao.execute(sql, calibracao.equipamentoId, calibracao.dataCalibracao, calibracao.resultado, calibracao.responsavel);
    return resultado.isertId;
}

export async function listarCalibracoes() {
      const sql = 'SELECT * FROM calibracao  = ?';
   const[resultado] = await conexao.execute(sql, id);
}

export async function listarCalibracoesDetalhadas() {
    const sql = 'SELECT * FROM calibracoesDetalhadas = ?';
    const[resultado] = await conexao.execute(sql,id);}

export async function buscarCalibracaoPorId(id) {
    const sql = 'SELECT * FROM calibracao WHERE id_calibracao = ?';
    const[resultado] = await conexao.execute(sql,id);
}
    
export async function atualizarCalibracao(id, calibracao) {
     const sql = 'UPDATE calibracao SET id_calibracao = ?';
    const[resultado] = await conexao.execute(sql,calibracao,id);
}

export async function excluirCalibracao(id) {
    const sql = 'DELETE ca SET id_calibracao = ?';
    const[resultado] = await conexao.execute(sql, id);
}
