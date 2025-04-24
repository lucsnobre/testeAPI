/****************************************************************************/
/* Objetivo: Model responsável pelo CRUD de dados de prêmio no BD          */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const connection = require('../../../Módulo/config');

const Premio = {
  getAll: async () => {
    const [rows] = await connection.query('SELECT * FROM tb_premios');
    return rows;
  },
  
  getById: async (id) => {
    const [rows] = await connection.query('SELECT * FROM tb_premios WHERE id_premio = ?', [id]);
    return rows[0];
  },
  
  create: async (premio) => {
    const { nome, categoria, ano } = premio;
    const [result] = await connection.query(
      'INSERT INTO tb_premios (nome, categoria, ano) VALUES (?, ?, ?)',
      [nome, categoria, ano]
    );
    return result.insertId;
  },
  
  update: async (id, premio) => {
    const { nome, categoria, ano } = premio;
    const [result] = await connection.query(
      'UPDATE tb_premios SET nome = ?, categoria = ?, ano = ? WHERE id_premio = ?',
      [nome, categoria, ano, id]
    );
    return result.affectedRows;
  },
  
  delete: async (id) => {
    const [result] = await connection.query('DELETE FROM tb_premios WHERE id_premio = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Premio;