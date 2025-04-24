/****************************************************************************/
/* Objetivo: Model responsável pelo CRUD de dados de plataforma no BD      */
/* Data: 10/04/2025                                                         */
/* Autor: Cachorrada                                                        */
/* Versão: 1.0                                                              */
/****************************************************************************/

const connection = require('../../../Módulo/config');

const Plataforma = {
  getAll: async () => {
    const [rows] = await connection.query('SELECT * FROM tb_plataforma');
    return rows;
  },
  
  getById: async (id) => {
    const [rows] = await connection.query('SELECT * FROM tb_plataforma WHERE id_INT = ?', [id]);
    return rows[0];
  },
  
  create: async (plataforma) => {
    const { nome, empresa, pais_origem, tipo } = plataforma;
    const [result] = await connection.query(
      'INSERT INTO tb_plataforma (nome, empresa, pais_origem, tipo) VALUES (?, ?, ?, ?)',
      [nome, empresa, pais_origem, tipo]
    );
    return result.insertId;
  },
  
  update: async (id, plataforma) => {
    const { nome, empresa, pais_origem, tipo } = plataforma;
    const [result] = await connection.query(
      'UPDATE tb_plataforma SET nome = ?, empresa = ?, pais_origem = ?, tipo = ? WHERE id_INT = ?',
      [nome, empresa, pais_origem, tipo, id]
    );
    return result.affectedRows;
  },
  
  delete: async (id) => {
    const [result] = await connection.query('DELETE FROM tb_plataforma WHERE id_INT = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Plataforma;